import { useEffect, useRef, useState } from 'react';
import useReveal from '../../hooks/useReveal';
import ChipGroup from './ChipGroup';
import Progress from './Progress';
import Eyebrow from '../Eyebrow';
import { brand, form } from '../../content';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CHIP_STEPS = form.steps.slice(0, 3);
const CONTACT_STEP = form.steps[3];
const TOTAL_STEPS = form.steps.length;

const initialAnswers = {
  trade: '',
  budget: '',
  bottleneck: '',
  name: '',
  business: '',
  phone: '',
  email: '',
  'service-area': '',
};

function getFieldErrors(answers) {
  const errors = {};
  if (!answers.name.trim()) errors.name = 'Enter your name.';
  if (!answers.phone.trim()) errors.phone = 'Enter a phone number.';
  if (!answers.email.trim()) {
    errors.email = 'Enter your email.';
  } else if (!EMAIL_REGEX.test(answers.email.trim())) {
    errors.email = 'Enter a valid email.';
  }
  return errors;
}

export default function LeadForm() {
  const containerRef = useReveal();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState(initialAnswers);
  const [botField, setBotField] = useState('');
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const advanceTimeout = useRef(null);
  const stepHeadingRef = useRef(null);
  const mounted = useRef(false);

  const errors = getFieldErrors(answers);
  const canSubmit = !errors.name && !errors.phone && !errors.email;

  const clearAdvance = () => {
    if (advanceTimeout.current) {
      window.clearTimeout(advanceTimeout.current);
      advanceTimeout.current = null;
    }
  };

  useEffect(() => clearAdvance, []);

  // Move focus to the new step's heading so keyboard and screen-reader
  // users know the step changed. Skipped on initial mount.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    stepHeadingRef.current?.focus();
  }, [step]);

  const handleChipSelect = (key, value, { advance = true } = {}) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    clearAdvance();
    if (!advance) return;
    advanceTimeout.current = window.setTimeout(() => {
      advanceTimeout.current = null;
      setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }, 250);
  };

  const handleFieldChange = (name, value) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    clearAdvance();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    if (!canSubmit) return;

    setStatus('sending');

    // Field names must match index.html mirror form exactly or leads are lost.
    const body = new URLSearchParams({
      'form-name': form.netlifyName,
      'bot-field': botField,
      trade: answers.trade,
      budget: answers.budget,
      bottleneck: answers.bottleneck,
      name: answers.name,
      business: answers.business,
      phone: answers.phone,
      email: answers.email,
      'service-area': answers['service-area'],
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Unexpected response: ${response.status}`);
      setStatus('sent');
    } catch (err) {
      console.error('Lead form submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id={form.id} className="bg-ink px-6 py-28 md:px-16 lg:px-24">
      <div ref={containerRef} className="mx-auto max-w-2xl">
        <Eyebrow data-reveal>{form.eyebrow}</Eyebrow>
        <h2
          data-reveal
          className="headline-section font-display font-bold leading-tight text-paper"
        >
          {form.headline}
        </h2>
        <p data-reveal className="mt-4 max-w-prose text-lg leading-relaxed text-paper">
          {form.sub}
        </p>

        <div data-reveal className="mt-10 rounded-lg border border-paper/10 bg-ink-2/60 p-6 md:p-8">
          {status === 'sent' && (
            <div className="py-6 text-center">
              <h3 className="font-display text-2xl font-bold text-paper">
                {form.success.headline}
              </h3>
              <p className="mt-3 leading-relaxed text-paper">{form.success.body}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="py-6 text-center">
              <h3 className="font-display text-2xl font-bold text-paper">{form.error.headline}</h3>
              <p className="mt-3 leading-relaxed text-paper">
                {form.error.body}{' '}
                <a
                  href={`mailto:${brand.email}`}
                  className="font-medium text-accent hover:text-amber"
                >
                  {brand.email}
                </a>
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-slate-light hover:text-paper"
              >
                {form.ui.tryAgain}
              </button>
            </div>
          )}

          {(status === 'idle' || status === 'sending') && (
            <form name={form.netlifyName} onSubmit={handleSubmit} noValidate>
              <Progress step={step} total={TOTAL_STEPS} label={form.ui.stepLabel} />

              {/* Honeypot: real bots fill this in, humans never see it. */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="bot-field">Leave this field blank</label>
                <input
                  id="bot-field"
                  type="text"
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botField}
                  onChange={(event) => setBotField(event.target.value)}
                />
              </div>

              {step <= 3 && (
                <div>
                  <h3
                    ref={stepHeadingRef}
                    tabIndex={-1}
                    className="font-display text-xl font-semibold text-paper focus:outline-none"
                  >
                    {CHIP_STEPS[step - 1].question}
                  </h3>
                  <div className="mt-6">
                    <ChipGroup
                      name={CHIP_STEPS[step - 1].key}
                      options={CHIP_STEPS[step - 1].chips}
                      value={answers[CHIP_STEPS[step - 1].key]}
                      onChange={(value, opts) =>
                        handleChipSelect(CHIP_STEPS[step - 1].key, value, opts)
                      }
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3
                    ref={stepHeadingRef}
                    tabIndex={-1}
                    className="font-display text-xl font-semibold text-paper focus:outline-none"
                  >
                    {CONTACT_STEP.question}
                  </h3>
                  <div className="mt-6 flex flex-col gap-5">
                    {CONTACT_STEP.fields.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="mb-2 block text-sm font-medium text-paper/80"
                        >
                          {field.label}
                          {field.required && <span className="text-accent"> *</span>}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          value={answers[field.name]}
                          onChange={(event) => handleFieldChange(field.name, event.target.value)}
                          onBlur={() =>
                            setTouched((prev) => ({ ...prev, [field.name]: true }))
                          }
                          className="w-full rounded-md border border-paper/20 bg-ink px-4 py-3 text-paper placeholder:text-slate-light/50 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          style={{ fontSize: '16px', minHeight: '44px' }}
                          aria-invalid={Boolean(touched[field.name] && errors[field.name])}
                        />
                        {touched[field.name] && errors[field.name] && (
                          <p className="mt-1.5 text-sm text-amber">{errors[field.name]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="min-h-[44px] text-sm font-medium text-slate-light hover:text-paper"
                  >
                    {form.ui.back}
                  </button>
                ) : (
                  <span />
                )}

                {step === 4 && (
                  <button
                    type="submit"
                    disabled={!canSubmit || status === 'sending'}
                    className="inline-flex min-h-[44px] items-center rounded-md bg-accent px-7 py-3 font-display font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-amber disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    {status === 'sending' ? form.ui.sending : CONTACT_STEP.submit}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
