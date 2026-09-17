# neilsang0.github.io — Neil Sangwaiya's personal site

This is Neil's own site. It is **independent of Solandor** and must stay that
way: separate repo, separate host, separate account, separate session.

## What it is
- A Vite + React + TypeScript + Tailwind + Framer Motion page (rebuilt 18 Sep
  2026 to Neil's "3D creator" spec, dark #0C0C0C, Kanit). Source in `site-src/`;
  `cd site-src && npm run build` writes `index.html` and `assets/` into the repo
  root, which is what Pages serves. Commit the build output. All copy lives in
  `site-src/src/content.ts`; the JSON-LD template is `site-src/index.html`.
- `shots/` are screenshots of Neil's own pages (solandor.co, bindler.pages.dev,
  GitHub, Apify) plus three rendered research cards; SSRN blocks headless
  capture so the paper cards are drawn from the paper facts instead.
- Also `robots.txt`, `sitemap.xml`, two portrait sizes (`neil.jpg`,
  `neil-sm.jpg`) and two IndexNow key files.
- Hosted on **GitHub Pages** from this repo: `NeilSang0/neilsang0.github.io`,
  branch `main`, root. Push to `main` and Pages rebuilds in one to five minutes.
  There is nothing to "deploy" beyond `git push`.
- **No Cloudflare.** The Workers copy that once existed on the Solandor account
  was deleted on 12 September 2026. Do not recreate it. Do not run wrangler here.
- Git author is `nsangwaiya@gmail.com`. `bsangwaiya@gmail.com` is dead and is
  never used. `solandorhq@gmail.com` is mail routing only, not an identity.

## What Solandor is to this site
Neil founded Solandor, so the page says so and links to solandor.co as one of
the things he has built. That is the whole relationship. **Solandor does not
link back, in markup or in schema, by Neil's decision on 12 September 2026**, and
nothing from the Solandor repo (`gcc-capital-connector/`) is imported, referenced
or shared here. If a task needs the Solandor codebase, it is the wrong session.

## The parts that carry search value, keep them
- `<link rel="canonical" href="https://neilsang0.github.io/">`
- Person JSON-LD with `sameAs` to LinkedIn, GitHub, both SSRN papers, solandor.co
- ProfilePage/Person JSON-LD only. The FAQPage node was dropped on 18 Sep 2026
  because the new layout has no visible FAQ, and schema must match the page.
- Real text in the HTML, never injected by script

## Content rules
- Every figure and claim is verified. The two SSRN papers, the credentials, the
  basketball record are all real. Do not add a claim Neil has not confirmed.
  Two lines were removed pending his word: a peer-review mention and a DIFC
  reference. They go back only if he says they are true.
- No phone number on the page. Email and LinkedIn are the contact routes.
- No long dashes in copy.

## Motion
FadeIn (whileInView, once), Magnet portrait, scroll-driven marquee rows,
character-by-character About text, sticky stacking project cards. The old
liquid gold field is gone with the redesign. Magnet stops under
`prefers-reduced-motion`.

## What the redesign dropped
The spec has five sections plus a contact footer, so the full experience
entries, the 18 simulations list, the Apify tool descriptions and the Bindler
catalogue links no longer appear. They are still in git history (commit before
18 Sep 2026) if Neil wants any of it back.

## Still open
- Google Search Console verification: needs the meta tag from Neil, then
  request indexing. As of 12 September the page is not in Google's index.
- LinkedIn and SSRN "website" fields pointing here: Neil's to set.
- `STITCH-BRIEF.md` is the design brief; `github/PROFILE-README.md` is the
  profile README already live at github.com/NeilSang0.

## Knowledge Panel (15 Sep 2026)
Neil ruled this site is the founder "about" page for Solandor and Bindler, so
both now link here and share the entity ID `https://neilsang0.github.io/#person`
(Solandor `lib/site.ts` + `components/public/structured-data.tsx`; Bindler
`site/build_site.py` + `site/content/about.md`). The page carries a ProfilePage
graph with the portrait as `image`; keep `description` equal to the meta
description. Never add a `sameAs` profile Neil has not confirmed exists.
