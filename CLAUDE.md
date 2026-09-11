# neilsang0.github.io — Neil Sangwaiya's personal site

This is Neil's own site. It is **independent of Solandor** and must stay that
way: separate repo, separate host, separate account, separate session.

## What it is
- One static page, `index.html`, plus `robots.txt`, `sitemap.xml`, two
  portrait sizes (`neil.jpg`, `neil-sm.jpg`) and two IndexNow key files.
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
- FAQPage JSON-LD whose answers match the visible FAQ word for word
- Real text in the HTML, never injected by script

## Content rules
- Every figure and claim is verified. The two SSRN papers, the credentials, the
  basketball record are all real. Do not add a claim Neil has not confirmed.
  Two lines were removed pending his word: a peer-review mention and a DIFC
  reference. They go back only if he says they are true.
- No phone number on the page. Email and LinkedIn are the contact routes.
- No long dashes in copy.

## Motion
Liquid gold field driven by requestAnimationFrame (not CSS keyframes, for
reasons in the source comment), plus scroll scrub, reveal-with-stagger,
magnetic buttons, portrait zoom, press-and-spring, and copy-to-clipboard on
the email. Everything stops under `prefers-reduced-motion`.
`__goldRunning()` in the console reports whether the field is animating.

## Still open
- Google Search Console verification: needs the meta tag from Neil, then
  request indexing. As of 12 September the page is not in Google's index.
- LinkedIn and SSRN "website" fields pointing here: Neil's to set.
- `STITCH-BRIEF.md` is the design brief; `github/PROFILE-README.md` is the
  profile README already live at github.com/NeilSang0.
