// ALL page copy lives here. One file for Ron to edit, one file to grep.
// Voice rules: plain language, blunt, specific. No hype, no agency-speak.
// No em dashes, en dashes, or hyphens as sentence punctuation. Use commas,
// periods, parentheses, or colons.
// Guardrails (SPEC §2): never name any client business. Only SPEC §4 stats.
// The agent is a knowledge agent. It never answers phones, texts leads,
// qualifies, books, or replaces follow-up.

export const brand = {
  name: 'M. Scott Consulting',
  legalName: 'M.Scott Consulting LLC',
  wordmark: 'M.SCOTT',
  email: 'M.scott8189@gmail.com',
};

// NOTE: index.html cannot import JS, so its <title>/<meta>/OG tags hardcode
// these values. If you edit this object, update index.html to match.
export const meta = {
  title: 'M. Scott Consulting | Meta Ads That Book Jobs for Contractors',
  description:
    'Meta ads and landing page funnels, done for you: for remodelers, kitchen and bath pros, and home service contractors. Run by an operator managing $20K+/mo in ad spend across 9 active accounts.',
  url: 'https://mscottconsultingllc.com',
  ogImage: '/world/stills/scene-1.webp',
};

export const nav = {
  links: [
    { label: 'The System', href: '#system' },
    { label: 'The Agent', href: '#agent' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
  ],
  cta: { label: 'Get Started', href: '#lead-form' },
};

// ---- Scene sections (SPEC §8 storyboard, scenes 1-6) ----

export const hero = {
  id: 'hero',
  eyebrow: 'Meta ads for home service contractors',
  headline: ['Booked jobs.', 'Not clicks.'],
  sub: 'I build and run the ads and the landing pages that turn homeowners into jobs on your calendar. For remodelers, kitchen and bath pros, refacers, and the trades. Run by an operator who manages real accounts with real budgets every day, not an agency.',
  cta: { label: 'Get Started', href: '#lead-form' },
  stats: [
    { value: 20, prefix: '$', suffix: 'K+', label: 'per month in Meta ad spend under management', mono: true },
    { value: 9, prefix: '', suffix: '', label: 'active ad accounts across NJ & NY home service businesses', mono: true },
  ],
  statsFootnote: 'Kitchens, baths, cabinet refacing, carpentry, full renovations.',
};

export const problem = {
  id: 'problem',
  eyebrow: 'Why contractors fire their agency',
  headline: 'You have been burned before.',
  burns: [
    {
      title: 'Agencies that don’t know the trades',
      body: 'They can say "kitchen remodel" in a headline. They cannot tell a reface from a full gut, and homeowners can smell it.',
    },
    {
      title: 'Leads that go cold',
      body: 'A name and a number in a spreadsheet three days later is not a lead. Speed is the whole game and most setups lose it.',
    },
    {
      title: 'Generic funnels that don’t convert',
      body: 'The same template every other contractor in your county is running, with your logo swapped in. Homeowners bounce, you pay anyway.',
    },
  ],
};

export const system = {
  id: 'system',
  eyebrow: 'The system',
  headline: 'Ad. Page. Your inbox.',
  body: 'One machine, three moving parts. I build the Meta campaigns and rotate the creative. The ads drive to a custom landing page built for your trade and your area, hosted and tracked for you. When a homeowner fills it out, the lead lands directly with you. No middleman, no portal to log into.',
  points: [
    {
      title: 'Meta ads, done for you',
      body: 'Campaign build, creative rotation, weekly monitored sweeps. Pause, refresh, and scale decisions follow written rules, not vibes. You own your ad account and pay Meta directly on your own card.',
    },
    {
      title: 'A funnel built for your trade',
      body: 'A custom landing page built to convert. The ads drive to it, I host it for you, and it is wired for tracking. You’re on one right now.',
    },
  ],
  proofLine: 'Every campaign monitored weekly with a written playbook. Pauses, refreshes, and budget moves follow written rules, not vibes.',
};

export const handoff = {
  id: 'handoff',
  eyebrow: 'The handoff',
  headline: 'Leads go straight to you. A human picks up the phone.',
  body: 'No AI answering your phones. No bot texting your leads. When a homeowner raises their hand, your people call them back, because a real voice from a real local business is what closes. I make the phone ring. Your team does what it already does best.',
  points: [
    'Leads hit your inbox the moment they submit',
    'Your team handles every call and every follow up',
    'No CRM, no portal, no extra software to pay for',
  ],
};

export const agent = {
  id: 'agent',
  eyebrow: 'The Hermes agent',
  headline: 'Meet Hermes: a knowledge agent for the back office. Not a receptionist.',
  intro: 'For ads clients only. Hermes is a custom AI assistant I build and maintain, trained on your business. It does exactly three jobs.',
  jobs: [
    {
      title: 'Materials sourcing',
      body: 'Ask it to find hardware for a rustic kitchen under your budget and it comes back with vetted links, not a search page.',
    },
    {
      title: 'Project knowledge',
      body: 'Specs, service areas, what each type of job needs, and what to watch out for before you commit to it.',
    },
    {
      title: 'Estimate prep',
      body: 'It pulls together what a quote needs before the visit so you walk in ready instead of promising a callback.',
    },
  ],
  contrast: 'It won’t answer your phones. Your team should do that. It kills the hours a week you spend researching and sourcing.',
};

export const about = {
  id: 'about',
  eyebrow: 'Who runs this',
  headline: 'An operator, not an account manager.',
  paragraphs: [
    'I’m Ron. I run Meta ad accounts and landing page funnels for home service businesses across NJ and NY, every single day. Not a team of juniors with my name on the invoice. Me, in the ad manager, on your account.',
    'I got here by doing this work for my own companies first. The playbook you get is the one I run when it’s my own money on the line: weekly sweeps, written rules for every pause and budget move, and pages built to convert homeowners in your market.',
    'If you want a vendor who sends a monthly PDF, I’m not your guy. If you want the person who actually does the work, send me your info below.',
  ],
  signature: 'Ron · M. Scott Consulting LLC',
};

// ---- Static sections (7-8) ----

export const pricing = {
  id: 'pricing',
  eyebrow: 'Pricing',
  headline: 'Two numbers. No surprises.',
  cards: [
    {
      name: 'Ads + Funnel Management',
      price: '$1,500',
      per: '/mo flat',
      includes: [
        'Meta campaign build and management',
        'Your custom landing page, built and hosted',
        'Creative rotation and weekly monitored sweeps',
        'Weekly reporting in plain English',
      ],
      note: '+ your ad spend, paid directly to Meta (typical clients run $1,500 to $3,000/mo)',
      cta: { label: 'Get Started', href: '#lead-form' },
      featured: true,
    },
    {
      name: 'The Hermes Agent',
      badge: 'For ads clients only',
      price: '$1,000',
      per: 'build fee',
      secondary: '+ $200/mo upkeep',
      includes: [
        'Custom AI assistant trained on your business',
        'Materials sourcing, project knowledge, estimate prep',
        'Kept current as suppliers, prices, and service areas change',
      ],
      note: 'Available only with Ads + Funnel Management.',
      cta: { label: 'Ask about the agent', href: '#lead-form' },
      featured: false,
    },
  ],
};

export const form = {
  id: 'lead-form',
  eyebrow: 'Get started',
  headline: 'Tell me about your business.',
  sub: 'Four quick questions. A real person (me) reads every one.',
  netlifyName: 'lead',
  steps: [
    {
      key: 'trade',
      question: 'What’s your trade?',
      chips: ['Kitchen & Bath', 'Refacing', 'General Remodel', 'Roofing', 'HVAC', 'Other'],
    },
    {
      key: 'budget',
      question: 'Monthly ad budget you’re comfortable with?',
      chips: ['Under $1,500', '$1,500 to $3,000', '$3,000+', 'Not sure yet'],
    },
    {
      key: 'bottleneck',
      question: 'What’s your biggest bottleneck right now?',
      chips: [
        'Not enough leads',
        'Leads don’t turn into jobs',
        'No time for marketing',
        'Burned by an agency before',
      ],
    },
    {
      key: 'contact',
      question: 'Where should I reach you?',
      fields: [
        { name: 'name', label: 'Your name', type: 'text', required: true },
        { name: 'business', label: 'Business name', type: 'text', required: false },
        { name: 'phone', label: 'Phone', type: 'tel', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'service-area', label: 'Service area (city / counties)', type: 'text', required: false },
      ],
      submit: 'Send it to Ron',
    },
  ],
  success: {
    headline: 'Got it. Talk soon.',
    body: 'Your info is in my inbox, not a queue. You’ll hear back from me within one business day.',
  },
  error: {
    headline: 'That didn’t go through.',
    body: 'Try again in a minute, or just email me directly:',
  },
  ui: {
    back: 'Back',
    sending: 'Sending…',
    tryAgain: 'Try again',
    stepLabel: (step, total) => `Step ${step} of ${total}`,
  },
};

export const faq = {
  id: 'faq',
  headline: 'FAQs',
  items: [
    {
      q: 'Who is this for?',
      a: 'Home service contractors who want more booked jobs: remodelers, kitchen and bath pros, cabinet refacers, carpenters, roofers, HVAC. My current accounts are across NJ and NY, but the work is remote and the playbook travels. If you serve homeowners, we can talk.',
    },
    {
      q: 'Do I pay the ad spend?',
      a: 'Yes, and that’s on purpose. Your ad account, your card, paid directly to Meta. You always own your account and your data. My fee is my fee, and your spend is never marked up or hidden inside it.',
    },
    {
      q: 'Do you lock me into a CRM or a contract?',
      a: 'No CRM, no portal, no extra software to pay for. Leads go straight to your inbox. The engagement is month to month and you can cancel anytime.',
    },
    {
      q: 'What is the Hermes agent, really?',
      a: 'Hermes is a custom AI assistant I build and maintain, trained on your business. It does three jobs: materials sourcing, project knowledge, and estimate prep. It will not answer your phones or text your leads. Your team should do that. It exists to kill the hours you spend researching and sourcing.',
    },
    {
      q: 'How fast can we launch?',
      a: 'Typically live within a week of kickoff. Campaign build and your landing page come first, then ads go live once you approve them.',
    },
  ],
};

export const footer = {
  blurb: 'Meta ads and landing page funnels for home service contractors, done for you.',
  contact: { email: brand.email },
  legal: [
    { label: 'Privacy Policy', href: '/privacy.html' },
    { label: 'Terms of Service', href: '/terms.html' },
  ],
  copyright: `© ${new Date().getFullYear()} M.Scott Consulting LLC. All rights reserved.`,
};
