# mscott-landing

Landing page for **M. Scott Consulting LLC** at https://mscottconsultingllc.com. Repositioned 2026-08 from real-estate wholesaling to **done-for-you Meta ads + landing page funnels for home-service contractors** plus a Knowledge Agent add-on. `SPEC.md` is the authoritative PRD; the approved build plan lives at `~/.Codex/plans/take-a-look-at-hazy-treasure.md`.

## Stack & commands

- Vite 7 + React 19 + Tailwind 3.4 + GSAP 3.14 (ScrollTrigger) + lucide-react. No router, single page.
- `npm run dev` / `npm run build` (outputs `dist/`) / `npm run preview` / `npm run lint`.
- **Hosting: Netlify only** (site id in gitignored `.netlify/state.json`, domain mscottconsultingllc.com). Build settings live in the Netlify UI; there is deliberately NO `netlify.toml` (use `public/_headers` for headers instead).

## Key files

- `src/content.js` — **ALL page copy.** Ron's edit surface and the grep surface for guardrails. Never hardcode visible strings in components.
- `src/theme.js` — brand tokens (single source). Mirrored by hand in `src/index.css` `:root` and the `:root` blocks of `public/privacy.html` / `public/terms.html`; keep all four in sync.
- `src/lib/gsap.js` — the ONLY place ScrollTrigger is registered.
- `src/hooks/useReveal.js` — shared scroll-reveal; respects `prefers-reduced-motion`.
- `src/components/world/StaticWorld.jsx` — owns the 5 active scene sections' layout/backgrounds. Scene copy components in `src/components/scenes/` are **pure content** (no scroll logic, no backgrounds) so a future scroll-world build can portal them into the scrub engine unchanged.
- `public/world/stills/` — AI-generated diorama backgrounds (scene-{1..6}.webp desktop 3:2, scene-{1..6}-m.webp mobile 9:16).
- Lead form = Netlify Forms (`name="lead"`); a hidden static mirror form in `index.html` must keep field names EXACTLY in sync with the React POST body or leads silently vanish. Email notifications to ronnytiburcio@gmail.com are configured in the Netlify UI (Forms → notifications).

## Hard guardrails (SPEC §2 — never violate)

1. Never mention FKB / Freedom Kitchen & Bath Pros / FPC / Freedom Pipeline / fkbpros.com or any client business name anywhere in the repo or built output. Proof stats are aggregate only (SPEC §4, verbatim: "$20K+ per month", "9 active ad accounts").
2. The Knowledge Agent is a **knowledge agent**: never claim it answers phones, texts, qualifies, books, or replaces follow-up. No CRM claims.
3. No fabricated testimonials, reviews, logos, or named case studies.
4. **Zero dashes on the page, period** (Ron, 2026-08-26): no em/en dashes, no hyphens in visible copy (write "home service", "follow up", reword instead of hyphenating), numeric ranges spelled "X to Y", and no decorative dash/rule marks in the UI (the eyebrow line was removed for this reason).
5. Body copy is white (`text-paper`), never gray, over the diorama backgrounds; gray (`slate-light`) is reserved for chrome (nav/footer links, copyright, placeholders).
6. No demo-video sections for the agent: Ron demos Hermes live on calls instead. The agent is publicly branded "The Hermes Agent" (still bound by guardrail: knowledge agent, never a receptionist).
7. Site font is **Schibsted Grotesk** (everything except stats/labels, which stay JetBrains Mono). It is the chosen free stand-in for OT Rima (Omnitype), the font Ron actually wants; if he ever buys the OT Rima web license, swap via theme.js + index.css + fonts link + the two legal pages.

## Current conversion hierarchy (approved 2026-08-27)

- The core promise is **homeowner leads**, not booked jobs. Do not imply that M. Scott books appointments or closes work. The contractor's team owns every call, follow up, and close.
- The page's primary story is **Meta ad → custom landing page → homeowner inquiry sent directly to the contractor**. The live page itself is featured as proof of the landing page work.
- The primary CTA is **"See if your market fits"** and leads to the four-question Netlify form.
- **The Hermes Agent is a secondary add-on.** It does not appear in the main navigation or as a full-screen diorama scene. Keep it as a compact, ads-client-only section beneath the primary pricing offer.
- Pricing hierarchy is one core offer at **$1,500 per month plus ad spend**, followed by the compact Hermes add-on at **$1,000 build fee plus $200 per month**.

## Gotchas

- Old navy/gold/cream tokens are deleted; any straggler class fails the Tailwind build visibly (intended).
- The Pinterest `p:domain_verify` meta tag in `index.html` must survive edits (live Pinterest domain claim).
- Legal pages are standalone hand-styled HTML (Pinterest API compliance text — keep it); they don't share React code.
- Higgsfield CLI (`~/.local/bin/higgsfield`) generated the diorama stills (~7 credits each on Ron's starter plan). Ron **decided against** the scroll-world flight-clip version (2026-08-26): the static stills page IS the final design. Don't rebuild the scrub-engine integration unless he asks. If he ever revives it: video on his Higgsfield starter plan costs ~104 credits per 8s 720p mini clip (way over benchmark), so use Monid (~$25 for the full 720p chain); one Higgsfield-rendered dive clip sits in the session scratchpad from calibration.
- Scene 5 assets remain in `public/world/stills/` but are intentionally unused after Hermes was demoted from a full scene on 2026-08-27.
- Deployment workflow: review changes locally first. After Ron approves the preview, push `main` to GitHub and let the connected Netlify site auto-deploy.
- Vercel is never used for this site.

## Imported Claude Cowork project instructions
