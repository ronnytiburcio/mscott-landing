# M. Scott Consulting — Landing Page Revamp Spec

**Repo:** `mscott-landing` (this repo) · **Hosting:** Netlify (existing site, keep the current domain — site id in `.netlify/state.json`) · **Date:** 2026-08-26

## 1. What this is

Complete repositioning and rebuild of the M. Scott Consulting landing page. The old site sells real estate wholesaling systems ("Stop Guessing. Start Closing.", Solo Closer Systems) — all of that goes away. The new site sells **done-for-you Meta ads + landing page funnels for home-service contractors** (remodelers, kitchen & bath, refacing, carpentry, roofing, HVAC), plus a **custom knowledge agent** add-on.

The page itself is a sales asset: the visitor is standing inside an example of the funnel work being sold. Build quality must reflect that.

## 2. Hard guardrails (non-negotiable)

1. **Never mention** "Freedom Kitchen & Bath Pros", "FKB", "FKB Pros", "FPC", "Freedom Pipeline", fkbpros.com, or any client business name (Ferolla, Roeland, Pro Star, Cabinet Reface Direct, New Gen Home Pros, Drakes Carpentry, The Practical Diva, etc.). All proof is anonymized/aggregate. Ron's other brand stays fully separate from this site.
2. **The agent is a knowledge agent, not a receptionist.** Never claim it answers phones, texts leads, responds to inquiries, qualifies, books appointments, or replaces follow-up. No CRM claims anywhere. The page explicitly says humans should handle lead follow-up.
3. **No fabricated testimonials, reviews, logos, or named case studies.** Only the approved aggregate stats in §4.
4. Lead form submissions go to **ronnytiburcio@gmail.com** via Netlify Forms email notification. No backend, no third-party form service, no CRM wiring.
5. Hosting stays on the **existing Netlify site and domain**. Do not create a new site.

## 3. Positioning & voice

**Who:** M. Scott Consulting LLC — Ron, an operator who currently manages Meta ad accounts and funnels for multiple home-service businesses across NJ and NY.

**Core angle:** *operator, not agency.* He runs this exact playbook every day on real accounts with real budgets. Contractors are burned out on marketing agencies that don't know the trades; the voice is a straight-talking peer who does the work himself — plain language, specific, allergic to hype. No agency-speak ("synergy", "growth partner"), no AI buzzwords.

**Anti-pitch is part of the pitch.** The page openly says what he *doesn't* do (no AI answering your phones, no locking you into a CRM, ad spend is paid by you directly to Meta) — trust through subtraction.

## 4. Approved proof stats (use verbatim, nothing stronger)

- "**$20K+ per month** in Meta ad spend under management"
- "**9 active ad accounts** across NJ & NY home-service businesses"
- "Kitchens, baths, cabinet refacing, carpentry, full renovations"
- Optional supporting line: "Every campaign monitored weekly with a written playbook — pauses, refreshes, and budget moves are rule-driven, not vibes."

Do not invent CPL, ROI, lead counts, or revenue claims.

## 5. The offer (three parts, one system)

Presented as one machine — **Ad → Page → Your inbox** — plus a third pillar that stands alone:

1. **Meta Ads, done-for-you.** Campaign build, creative rotation, weekly monitored sweeps, rule-based pause/refresh/scale decisions. Client owns their ad account; ad spend is paid directly to Meta on their own card.
2. **The funnel.** A custom high-converting landing page the ads drive to, built and hosted for them, wired for tracking. Copy hook: "You're on one right now."
3. **The Knowledge Agent (add-on, ads clients only).** A custom AI assistant built and maintained by Ron, trained on the client's business. Scope it to exactly three named jobs on the page: **materials sourcing** ("find me hardware for a rustic kitchen under $X" → vetted links), **project knowledge** (specs, service areas, what's needed and what to watch out for on each job), and **estimate prep** (pull together what a quote needs before the visit). Explicit contrast copy: "It won't answer your phones — your team should do that. It kills the hours a week you spend researching and sourcing."

### Pricing (SHOW ON PAGE — numbers below are Ron-approved defaults; confirm with Ron before launch, marked ⚠️ EDIT)

- **Ads + Funnel Management:** ⚠️ EDIT `$1,500/mo` flat — includes campaign management, the custom landing page, weekly reporting. "+ your ad spend, paid directly to Meta (typical clients run $1,500–$3,000/mo)".
- **Knowledge Agent add-on:** ⚠️ EDIT `$1,000` one-time build + `$200/mo` upkeep (keeps it current as suppliers, prices, and service areas change). Available only to ads clients.
- No long-term contract claims unless Ron specifies; omit contract terms rather than inventing them.

## 6. Tech approach

- **Stack:** stay in this repo. Vite + React 19 + Tailwind + GSAP (ScrollTrigger) are already installed; add ScrollTrigger registration. Node/Netlify build config already works — keep `dist` output.
- **The signature interactive element is scroll-world.** The `scroll-world@scroll-world` plugin is installed at user scope — invoke the **scroll-world skill** to generate the scroll-scrubbed fly-through (scene stills + flight clips + its vanilla-JS scrub engine). Higgsfield CLI is installed and authenticated (`~/.local/bin/higgsfield`). The scroll-world engine is framework-agnostic; mount it in a React wrapper component that owns the scroll container, with the narrative sections layered over/between flight segments.
- **Answer scroll-world's interview from this spec:** subject = M. Scott Consulting contractor-marketing fly-through; brand kit = §7; scenes = §8 storyboard; request the 9:16 mobile cut.
- **Forms:** Netlify Forms (`data-netlify="true"`, hidden `form-name` input, honeypot field). Because this is a JS-rendered SPA, include a static HTML mirror of the form fields (in `index.html` or a static file) so Netlify detects it at build time. Configure email notification to ronnytiburcio@gmail.com (note in README that the notification is set in the Netlify UI: Forms → notifications).
- **Legal pages:** keep `public/privacy.html` and `public/terms.html` working; update any wholesaling-specific language if present; keep footer links to them.
- Remove/replace all wholesaling components (`Hero`, `Friction`, `Authority`, `Systems`, `Founder`, `Decision` as written), the founder photo if it's tied to the old positioning (Ron can supply a new photo — leave a placeholder slot), and the old `<title>`/meta ("Precision-Engineered Real Estate Systems" → new SEO title/description for Meta ads management for contractors).

## 7. Brand identity (new — do not reuse navy/gold)

Direction: **kinetic performance-marketing energy that still reads trustworthy to a blue-collar business owner.** Think job-site materials meets modern dashboard — not wealth-advisor, not crypto.

- Palette suggestion (Claude Code may refine, keep the temperament): deep charcoal/ink base, high-energy accent (safety-orange or electric amber family), warm off-white surfaces, one cool slate secondary. Strong contrast, AA accessible.
- Type: a confident grotesk for headlines (e.g. from Google Fonts: Archivo/Space Grotesk family), humanist sans for body, mono for stats/labels. Replace the current Playfair serif — too formal for this audience.
- Motion language: scroll-scrubbed camera flight (scroll-world) + GSAP reveals; number tickers on the stats; no parallax clutter on top of the flight segments.
- The scroll-world diorama brand kit uses this same palette so the 3D world and the UI feel like one system.

## 8. Page architecture & scroll-world storyboard

Single page. The camera flies the journey a homeowner-lead takes through a contractor's world; DOM sections pin between flight segments.

| # | Flight scene (isometric diorama) | Pinned section content |
|---|---|---|
| 1 | Establishing shot: a neighborhood job site — work trucks, a kitchen mid-remodel | **Hero.** Headline in the "booked jobs, not just clicks" territory (write 3 options for Ron). Sub: who it's for + operator credibility line. CTA button → form. Stats row: $20K+/mo · 9 accounts. |
| 2 | Camera dives toward a phone on a workbench, a Meta ad playing in-feed | **Problem.** The three burns: agencies that don't know the trades; leads that go cold; generic funnels that don't convert. Short, blunt copy. |
| 3 | Through the phone screen into a landing page world (funnel imagery) | **Pillar 1 + 2: The Ads + The Funnel.** How the system works, Ad → Page → Your inbox. "You're on one right now." |
| 4 | The lead lands in an office scene — a human picks up the phone | **The handoff.** Explicit: leads go straight to you; your people do the follow-up. This is the anti-AI-receptionist stance, framed as a feature. |
| 5 | A workshop/materials world — shelves of cabinets, tile, hardware, fixtures | **Pillar 3: The Knowledge Agent.** Three named jobs (sourcing / project knowledge / estimate prep) + the "won't answer your phones" contrast line + **video slot**: 16:9 placeholder (poster frame + play) for a screen recording of the agent sourcing materials. Build the slot; Ron records the clip later. |
| 6 | Touchdown: clean closing scene, sunrise over the finished kitchen | **Operator/About.** Short first-person block from Ron (placeholder copy + photo slot): manages multiple accounts, does the work himself. |
| 7 | (no flight — static) | **Pricing.** Two cards per §5 pricing. Agent card visibly marked "add-on for ads clients". |
| 8 | (no flight — static) | **Lead form** (§9) + short FAQ (4–6 questions: Who is this for? Do I pay ad spend? Do you lock me into a CRM/contract? What's the agent, really? How fast can we launch?) + footer (LLC name, privacy, terms). |

Degrade gracefully: until clips load (and for `prefers-reduced-motion`), show scene stills as static section backgrounds — the page must be fully readable with zero video.

## 9. Lead form (multi-step, the form is itself a demo)

Netlify Forms, one submission at the end, progress indicator, keyboard/mobile friendly:

1. **Trade** — chips: Kitchen & Bath / Refacing / General Remodel / Roofing / HVAC / Other
2. **Monthly ad budget you're comfortable with** — chips: Under $1,500 / $1,500–$3,000 / $3,000+ / Not sure yet
3. **Biggest bottleneck** — chips: Not enough leads / Leads don't turn into jobs / No time for marketing / Burned by an agency before
4. **Contact** — name, business name, phone, email, service area (text). Submit CTA: "Send it to Ron" (or similar first-person).

Success state on-page (no redirect): confirms a real person replies, sets expectation ("You'll hear back from me within one business day"). All answers included in the email payload.

## 10. Acceptance checklist

- [ ] Zero occurrences of the §2 forbidden names anywhere in repo output (grep the built `dist`).
- [ ] No receptionist/booking/CRM claims for the agent.
- [ ] Only §4 stats used; pricing renders the ⚠️ EDIT values pending Ron's confirmation.
- [ ] Fly-through scrubs smoothly desktop + mobile (9:16 cut), static-still fallback + `prefers-reduced-motion` respected; Lighthouse mobile perf ≥ 80.
- [ ] Multi-step form submits to Netlify Forms; test submission arrives; static form mirror present so Netlify registers it.
- [ ] Video placeholder slot renders cleanly without a video file.
- [ ] Privacy/terms links intact; new title/meta/OG tags; favicon replaced (old diamond optional to keep or refresh).
- [ ] Builds clean (`npm run build`), deploys to the existing Netlify site, existing domain untouched.

## 11. Sequence for Claude Code

1. Strip old sections/copy; scaffold new section skeleton with static backgrounds and final copy (everything works before any video exists).
2. Build form, pricing, FAQ, footer, meta/SEO. Deploy preview.
3. Invoke scroll-world skill with §7/§8 answers; generate stills first (fallback layer), then flight clips; wire the scrub engine into the React wrapper.
4. Performance pass (lazy segments, poster frames, mobile cut), checklist §10, deploy.

Items needing Ron before launch (build should not block on them): final pricing numbers, hero headline pick, agent demo clip, About photo/blurb.
