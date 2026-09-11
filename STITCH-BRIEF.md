# Stitch brief — Neil Sangwaiya, personal site

Paste the PROMPT into Stitch. Everything under CONTENT is verified against the
live page; do not let Stitch reword the figures, the paper findings or the
credentials. Take layout and type from Stitch, keep these words.

---

## PROMPT

Design a one-page personal website for a finance undergraduate and
sustainable-finance researcher based in Dubai. Single scrolling page, desktop
and mobile. Restrained and editorial rather than startup-flashy: this is read by
academics, recruiters and investors, not consumers.

Sections in this order: hero, about, research, building, basketball,
education and leadership, credentials, FAQ, footer.

Type: a serif display face for the name and section headings, a clean sans for
body and labels. Numbers should read cleanly, this page is full of them.

Palette: one dark, near-black ground with a single warm accent. No gradients,
no glassmorphism, no card-shadow soup. Generous whitespace, a clear type scale,
and section headings that carry small uppercase labels.

Research entries should look like citations, not marketing cards: title, venue
and date on one line, a short finding underneath, one quiet "Read" link.

Credentials should be a dense two-column list, not badges or logos.

No stock photography, no illustrations, no hero image. The type is the design.

---

## CONTENT — use verbatim

### Name and one-liner
Neil Sangwaiya
Dubai, UAE

Finance undergraduate and sustainable-finance researcher, founder of Solandor,
and a 6'6" national-level basketball captain. I work at the intersection of
climate finance, investment management and applied AI.

Tags: Researcher · Founder · Finance student · Elite athlete · MUN chair ·
Sustainable finance

Links: LinkedIn · SSRN research · Solandor · Email

### About
Finance undergraduate at RIT Dubai and former national-level athlete, pairing
high-performance discipline with hands-on training across investment banking,
M&A, risk and sustainable finance. Ranked 1st in a Deloitte business
simulation, led an international consulting team through X-Culture Global, and
completed 18 employer-issued job simulations with Citi, Goldman Sachs, BCG,
Oliver Wyman and leading global law firms. Holds thirteen sustainability-finance
credentials from UNU-IAS, the UNDP SDG Finance Academy (six assessed courses,
98% average) and Position Green.

### Research

**India's Sovereign Green Bonds: Did Investors Actually Pay a Premium for Green?**
SSRN Working Paper 7251660 · Aug 2026
Tested for a "greenium" across seven matched sovereign auctions: green bonds
priced ~2.0 bps below the conventional curve, but the premium held only because
the RBI cancelled or truncated auctions. Sourced entirely from DEA Public Debt
Management data.
https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251660

**What Does CBAM Actually Cost a Gulf Equity Investor?**
SSRN Working Paper 7256019 · Aug 2026
Measured how the EU's Carbon Border Adjustment Mechanism affects the top 27 ADX
and DFM constituents. Screening out CBAM-exposed names costs just 23 bps of
tracking error, driven almost entirely by one constituent.
https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7256019

### Building

**Solandor — Founder**
Clean energy capital platform · 2026
A neutral, free database of clean energy projects seeking finance and the
investors who fund them across the Gulf, South Asia and South East Asia.
solandor.co

**AIToolFinder — Founder & Developer**
AI-tool comparison platform · 2026
Designed, built and shipped a live platform comparing 50+ AI tools across 10
categories, deployed end-to-end on Cloudflare Workers.

### Basketball

**Elite Athlete & Team Captain**
Al Nasr Club · Dubai Tribe U16 & U19 · RIT Dubai · 2018-present
6'6" starter and multi-year Al Nasr member; captained the Dubai Tribe U16 and
U19 squads. Represented a UAE team at a European club tournament in Austria and
a GCC competition in Oman, and was invited to the Combine Academy elite
development combine in North Carolina alongside NCAA-pathway prospects.
Multiple-time MVP.

### Education & leadership
RIT Dubai — BSc Finance (in progress), 2024-present
Emirates International School, Jumeirah — IB Diploma, Prefect, 2024
Model United Nations — Co-Chair, G20 Committee
Deloitte Business Simulation — 1st Place Overall, 2025

### Credentials
UNDP SDG Finance Academy — six assessed courses, 98% average (four at 100%)
UN University (UNU-IAS) — Net Zero 101
Position Green Academy — CSRD/ESRS, SFDR, GHG Protocol, VSME (7 courses)
Forage — 18 employer job simulations (Citi, Goldman Sachs, BCG, Oliver Wyman,
Clifford Chance and more)
Google — AI Essentials & Analytics specializations

### FAQ

**Who is Neil Sangwaiya?**
A Dubai-based finance undergraduate at RIT Dubai, an SSRN-published
sustainable-finance researcher, the founder of the clean energy capital platform
Solandor, and a 6'6" national-level basketball captain.

**What does he research?**
Independent sustainable-finance research notes on SSRN using primary-source
data, including India's sovereign green-bond "greenium" and the cost of the EU's
CBAM to Gulf equity investors.

**What has he founded?**
Solandor, a neutral clean energy capital platform for the Gulf, South Asia and
South East Asia, and AIToolFinder, a live AI-tool comparison platform on
Cloudflare Workers.

### Footer
Neil Sangwaiya · Dubai, UAE · LinkedIn · Solandor

---

## WHAT MUST SURVIVE THE REDESIGN

Stitch will not generate these and the page loses its search value without them.
Keep the existing `<head>` from public/index.html and drop the new markup under
it:

- `<link rel="canonical" href="https://neilsang0.github.io/">`
- the Person JSON-LD, including sameAs to LinkedIn, GitHub, both SSRN papers and
  solandor.co
- the FAQPage JSON-LD, and the visible FAQ answers that match it word for word
- title and meta description
- the real text in the HTML, not injected by script. A crawler that has to run
  JavaScript to see this page indexes it slower and less reliably.

Deploy target stays https://neilsang0.github.io — solandor.co's founder schema
and the GitHub profile both point there.
