# Level Access Baths — Project Handoff

Paste this whole document into the first message of a new chat to continue building the site.

---

## What this is
Marketing website for **Level Access Baths (LAB)** — an Omaha/Council Bluffs accessible-bathroom remodeling company. Owner: Josh.

## How to load the current code (do this first in the new chat)
The live site is the source of truth. Pull it fresh:
```
git clone --depth 1 https://github.com/joshtripp00-wq/level-access-baths.git lab-site
```
Then work inside `lab-site/`. The repo is public, so this always works.

## Hosting & deploy flow
- **Code:** GitHub repo `joshtripp00-wq/level-access-baths` (public)
- **Hosting:** Netlify (project "creative-kataifi-f34253") — auto-deploys ~30s after a GitHub commit
- **Deploy process (CRITICAL):** Josh updates files → uploads to GitHub → Netlify auto-deploys
- **THE #1 GOTCHA:** When uploading to GitHub, you must UNZIP the deploy zip first, then drag the LOOSE files in. Dragging the .zip itself just puts a zip file in the repo and nothing updates. Select ALL files (Cmd+A) including images, or image files get missed.
- If changes don't show after deploy: it's cache. Netlify → Deploys → "Trigger deploy" → "Clear cache and deploy site." Then check in an incognito window.
- netlify.toml: forces www→non-www, .html→clean URLs (301), HTML set to no-cache so deploys show immediately.
- **Repo cleanup TODO:** stray files got committed by accident and should be deleted from GitHub: `lab-site-deploy-flat_3.zip`, `_4.zip`, `_5.zip`, and folder `lab-site-deploy-flat 4`.

## Brand
- **Colors:** navy #1a2744, gold #c5a55a, near-black #0e1826, charcoal #2c2c2a, off-white #f5f4f0, cream #f9f6f1
- **Fonts:** Cormorant Garamond (headings), Outfit (body)
- **Logo:** "LAB" wordmark with solid-triangle "A" joined into the letters. Real logo files are in the repo: logo-monogram-navy.png, logo-monogram-white.png, logo-full-reversed.png, favicon.png. NOTE: the SVG versions had a rendering flaw (hollow notch in the A) — use the PNGs, which were extracted from the brand board.
- **Voice:** Accessibility as architecture/luxury, NOT clinical or medical. "Looks like a renovation you wanted, not one you needed."
- **Tagline in use:** "Live Without Limits" (nav). Brand board's official tagline is "ACCESS · COMFORT · CONFIDENCE" (used in footer logo).

## Business facts (use consistently — NAP for local SEO)
- **Phone:** (402) 234-8757  (tel:+14022348757)
- **Email:** hello@levelaccessbaths.com
- **Location:** Omaha, NE & surrounding (Bellevue, Papillion, La Vista, Elkhorn, Council Bluffs, Gretna, Millard, Plattsmouth)
- **Pricing:** conversions "start around $6,000 all-in" with lifetime leak-free warranty. Grab bar package $650. NEVER itemize pricing.
- **Owner installs personally** for now (true) — will add an install crew eventually, revisit "Owner-Installed" claims then.
- **GA4 Measurement ID:** G-GF9SVX28W3 (clean LAB property; replaced old Revo Baths ID G-8WNGPBWT8H)

## The product (CRITICAL for image generation)
LAB installs **solid-surface / acrylic wall PANELS (NOT tile, no grout) + molded shower pans.** Mix of curb vs zero-entry; some patterned panels, some solid.
AI image prompt rules that work (learned through many iterations):
- "Smooth seamless solid-surface wall panels, molded one-piece shower pan — NO tile, no grout lines, no individual tiles"
- "The shower is a self-contained unit; its molded pan floor meets the existing separate LVP bathroom floor at a clear transition edge — different materials, do NOT flow together/match" (these are retrofits into existing homes)
- "All shower walls flat and straight, clean 90-degree square corners — no curved/rounded walls"
- Specify bench side explicitly: "corner bench seat on the LEFT wall"
- Always end with: "Photorealistic, professional architectural photography, bright natural lighting, warm neutral tones, wide lens, high-end residential, no people."
- Josh generates images externally (ChatGPT/DALL-E) and sends them; Claude places them.
- **Claude CANNOT see image contents reliably** — Josh must visually verify every photo. Do not trust Claude's labeling of what an image shows.

## Current images on site (all real, no more stock)
- hero-zero-entry.jpg — homepage hero (real AI image: cream/marble zero-entry shower, bench, niche)
- service-walk-in.jpg, service-tub-to-shower.jpg, service-low-threshold.jpg, service-full-remodel.jpg, service-safety-accessories.jpg — the 5 service cards (real AI images, marble/stone solid-surface)
- Gallery uses Josh's 4 real before/after project photos (base64 embedded)
- All Unsplash stock has been removed from customer-facing pages. (portal.html still has 2, but it's a noindexed tool — fine.)
- Images are optimized to ~170KB each. Keep new images under ~250KB (resize to 1600px wide, JPEG q82).

## Pages that exist
Marketing: index, about, services, pricing, gallery, contact, learning, builds (sister company "Level Access Builds" coming-soon), privacy, thank-you
5 dedicated service pages: zero-entry-showers, walk-in-showers, tub-to-shower-conversion, ada-bathroom-remodeling, aging-in-place-bathrooms (navy hero backgrounds, no photos, Service+FAQ schema)
6 Learning Center guides: accessible-shower-cost-omaha, zero-entry-vs-low-threshold, aging-in-place-bathroom-upgrades, tub-to-shower-conversion-guide, ada-bathroom-requirements-home, grab-bar-placement-guide (Article+FAQ schema)
Tools (noindexed): portal.html (Supabase customer portal), estimate.html (estimate builder)

## Backend (Supabase) — for portal/estimate tools
- Project URL: https://waqfuslrxqhnusazgiwr.supabase.co
- Anon key is public/in-code (safe). Tables: projects, estimates, project_updates, messages, photos. Storage bucket: project-photos.
- Admin login hardcoded in portal.html ~line 914: trippentusa@gmail.com
- RLS is enabled with policies.

## SEO state (done)
- All canonicals non-www extensionless. Sitemap at /sitemap.xml (20 URLs).
- Article/FAQ/Service/LocalBusiness schema across pages. Phone in schema = +1-402-234-8757.
- TODO (manual, on Josh): claim Google Business Profile (Bathroom Remodeler category), submit sitemap to Search Console.

## BIG RECENT CHANGE: Sales pivot (messaging)
Josh is adding a commissioned salesperson, framed as an **"Accessibility Specialist."** Site copy was rewritten to be HONEST about this — it no longer claims "no sales pressure / no salesperson." Instead it attacks the BAD parts of competitor sales (call centers, bait pricing, today-only urgency, upselling) while owning that a knowledgeable specialist visits. Contact page has a "What to Expect From Your Visit" section (book → assess → same-day price) + a "promise on pricing" block (no upsell, one all-in number). About/services/homepage estimator all updated to match. DO NOT reintroduce "no salesperson/no sales" absolute claims.

## Working preferences
- Josh gives strategic direction + visual verification; Claude writes code/content + does file edits.
- Josh iterates fast, flags problems directly, prefers concrete deliverables over generic advice.
- Workflow: Claude edits files in workspace → builds a flat deploy zip at /mnt/user-data/outputs/lab-site-deploy-flat.zip → also a multi-page preview (lab-site-preview.html, tab-bar iframe switcher) so Josh can review before deploying.
- Build the deploy zip flat (files at root, not in a subfolder).

## Open / on the horizon
- More AI service images as Josh generates them (e.g. regenerate hero with bench on LEFT)
- Real customer testimonials to replace placeholders
- Google Business Profile + Search Console (manual)
- "Meet Your Specialist" section could be added once the salesperson is hired
- hello@ email forwarding confirmation
- Level Access Builds (sister company) further development TBD
