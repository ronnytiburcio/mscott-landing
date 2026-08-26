# M. Scott Consulting — Landing Page

Marketing site for **M. Scott Consulting LLC** at https://mscottconsultingllc.com. Sells done-for-you Meta ads and landing page funnels for home-service contractors, plus a Knowledge Agent add-on. See `SPEC.md` for the full positioning and content brief, and `CLAUDE.md` for repo conventions and guardrails.

## Stack

- Vite 7 + React 19 + Tailwind 3.4 + GSAP 3.14 (ScrollTrigger) + lucide-react.
- No router, single page. All copy lives in `src/content.js`; brand tokens live in `src/theme.js`.

## Commands

```
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # eslint
```

## Deploy

Hosted on **Netlify** (existing site, existing domain, mscottconsultingllc.com). Site id lives in the gitignored `.netlify/state.json`. Build settings are configured in the Netlify UI; there is deliberately no `netlify.toml`. Push to the connected branch and Netlify builds and deploys automatically.

**Netlify Forms email notification** to ronnytiburcio@gmail.com is configured in the Netlify UI: Forms → Form notifications. The hidden mirror form in `index.html` must keep its field names in sync with the POST body built in `src/components/form/LeadForm.jsx`, or lead submissions stop reaching Netlify Forms.

## Structure

- `src/content.js` — all page copy.
- `src/theme.js` — brand color/font tokens, mirrored in `src/index.css` and the `public/*.html` legal pages.
- `src/components/world/StaticWorld.jsx` + `src/components/scenes/` — the six scroll sections.
- `src/components/form/` — the multi-step lead form (`LeadForm.jsx`, `ChipGroup.jsx`, `Progress.jsx`).
- `src/components/Pricing.jsx`, `src/components/Faq.jsx` — static sections after the scroll world.
- `public/privacy.html`, `public/terms.html` — standalone legal pages (Pinterest API compliance text, kept in sync by hand with `src/theme.js`).
