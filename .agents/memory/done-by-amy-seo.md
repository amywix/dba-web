---
name: Done By Amy SEO constraints
description: How SEO works (and its hard limit) for the done-by-amy artifact
---

# Done By Amy — SEO model

`artifacts/done-by-amy` is a **static Vite SPA** (artifact.toml: `serve=static`, rewrite `/* -> /index.html`). There is no Node server in production.

**Hard limit:** crawlers receive the same `index.html` `<head>` for every route. Per-page meta (title/description/canonical/OG) is set client-side by the `useSEO` hook (`src/hooks/use-seo.ts`) and is only honoured by crawlers that execute JS (Googlebot does, with delay; most social/other bots do not).

**Decisions made:**
- `index.html` carries the homepage-level meta + full JSON-LD `@graph` (Organization, LocalBusiness, LeadCatch/AutoDial Service, FAQPage). This is the canonical crawler-visible source.
- Deliberately **no static `<link rel=canonical>` in index.html** — a hardcoded home canonical would force every SPA route to canonicalize to `/` for crawlers. Per-page canonical is left to `useSEO`.
- `public/sitemap.xml` and `public/robots.txt` (with Sitemap line) are the reliable crawlability levers; keep sitemap in sync when routes/blog slugs change.

**Why:** Proper per-route SEO (crawler-visible canonical/title) requires prerendering/SSG, which isn't reliable in the static deploy build step (no guaranteed Chromium). Until prerender/SSG is added, the sitemap + strong index.html + JS-rendered per-page meta is the ceiling.

**Pricing note:** LeadCatch & AutoDial = $199/mo, AI Chatbots from $149/mo. `blog-posts.ts` figures are intentional *market-rate* ranges (e.g. "missed-call ~$99/mo"), NOT Done By Amy pricing — leave them.
