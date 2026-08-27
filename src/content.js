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
  title: 'M. Scott Consulting | Meta Ads and Landing Pages for Contractors',
  description:
    'Meta ads and custom landing pages for home service contractors. Leads go straight to your team. Personally managed across $20K+ per month and 9 active ad accounts.',
  url: 'https://mscottconsultingllc.com',
  ogImage: '/world/stills/scene-1.webp',
};

export const nav = {
  links: [
    { label: 'The System', href: '#system' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
  ],
  cta: { label: 'See if your market fits', href: '#lead-form' },
};

// ---- Scene sections (SPEC §8 storyboard, five active scenes) ----

export const hero = {
  id: 'hero',
  eyebrow: 'Meta ads and landing pages for home service contractors',
  headline: ['Homeowner leads.', 'Not clicks.'],
  sub: 'I build and manage your Meta ads, custom landing page, and tracking. When a homeowner fills it out, the lead goes straight to your team. Built for remodelers, kitchen and bath pros, refacers, and the trades.',
  cta: { label: 'See if your market fits', href: '#lead-form' },
  ctaNote: '$1,500 per month, plus ad spend. Four questions. I reply personally.',
  stats: [
    { value: 20, prefix: '$', suffix: 'K+', label: 'per month in Meta ad spend under management', mono: true },
    { value: 9, prefix: '', suffix: '', label: 'active ad accounts across NJ & NY home service businesses', mono: true },
  ],
  statsFootnote: 'Kitchens, baths, cabinet refacing, carpentry, full renovations.',
};

export const problem = {
  id: 'problem',
  eyebrow: 'Why contractors switch',
  headline: 'The usual agency setup wastes the lead.',
  burns: [
    {
      title: 'Agencies that don’t know the trades',
      body: 'They know the marketing words. They do not know the difference between a reface and a full gut, and homeowners can tell.',
    },
    {
      title: 'Leads that go cold',
      body: 'A name and number in a spreadsheet three days later is not useful. Speed is the whole game.',
    },
    {
      title: 'Generic funnels that don’t convert',
      body: 'The same template every contractor gets, with your logo swapped in. Homeowners bounce and you still pay.',
    },
  ],
};

export const system = {
  id: 'system',
  eyebrow: 'The system',
  headline: 'Ad. Page. Your inbox.',
  body: 'One system, three connected parts. I manage the campaign, build the page, and send every homeowner inquiry directly to your team.',
  points: [
    {
      title: 'I build the Meta campaign',
      body: 'Campaign setup, creative rotation, and weekly monitoring. You own the ad account and pay Meta directly on your own card.',
    },
    {
      title: 'I build the landing page',
      body: 'Custom copy, responsive design, hosting, and tracking for your trade and service area.',
    },
    {
      title: 'The lead goes to your team',
      body: 'The moment a homeowner submits, the inquiry lands directly with you. No portal and no middleman.',
    },
  ],
  sample: {
    eyebrow: 'Live sample',
    headline: 'You are looking at the product.',
    body: 'This page shows the custom strategy, responsive design, tracking, and lead flow included with your campaign.',
  },
  proofLine: 'Your ad account. Your card. Your data. Every week, I monitor what to pause, refresh, and scale.',
};

export const handoff = {
  id: 'handoff',
  eyebrow: 'The handoff',
  headline: 'The lead is yours. The conversation stays human.',
  body: 'No AI answering phones. No bot texting leads. When a homeowner raises their hand, your people call. I build the system that delivers the inquiry. Your team builds the relationship and closes the work.',
  points: [
    'Leads hit your inbox the moment they submit',
    'Your team handles every call and every follow up',
    'No CRM, no portal, no extra software to pay for',
  ],
};

export const about = {
  id: 'about',
  eyebrow: 'Who runs this',
  headline: 'An operator, not an account manager.',
  paragraphs: [
    'I’m Ron. I manage Meta ads and landing page funnels for home service businesses across NJ and NY every day. No junior account manager. I am in the ad account, watching the spend and making the decisions.',
    'I built this playbook by running it for my own companies first. The same written rules guide every pause, refresh, budget move, and landing page decision when your money is on the line.',
  ],
  signature: 'Ron · M. Scott Consulting LLC',
};

// ---- Static sections (7-8) ----

export const pricing = {
  id: 'pricing',
  eyebrow: 'Pricing',
  headline: 'One core offer. No surprises.',
  primary: {
    name: 'Ads and Landing Page Management',
    price: '$1,500',
    per: 'per month',
    includes: [
      'Meta campaign build and management',
      'Your custom landing page, built and hosted',
      'Creative rotation and weekly monitored sweeps',
      'Weekly reporting in plain English',
    ],
    note: 'Your ad spend is paid directly to Meta. Typical clients run $1,500 to $3,000 per month.',
    cta: { label: 'See if your market fits', href: '#lead-form' },
  },
  addon: {
    name: 'The Hermes Agent',
    badge: 'Optional for ads clients',
    price: '$1,000 build fee, then $200 per month',
    body: 'A knowledge agent trained on your business for materials sourcing, project knowledge, and estimate prep. I build it and keep it current.',
    note: 'It does not answer phones or follow up with leads. Your team should do that.',
    cta: { label: 'Ask about Hermes', href: '#lead-form' },
  },
};

export const form = {
  id: 'lead-form',
  eyebrow: 'See if your market fits',
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
      a: 'Home service contractors who want a steadier flow of homeowner inquiries: remodelers, kitchen and bath pros, cabinet refacers, carpenters, roofers, and HVAC companies. My current accounts are across NJ and NY, but the work is remote and the playbook travels. If you serve homeowners, we can talk.',
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
