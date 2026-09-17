// Every line here is Neil's own information, carried over from the previous
// build of the site. Nothing is invented; figures come from the SSRN papers.
export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
export const EMAIL = 'nsangwaiya@gmail.com'
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/neilsangwaiya/',
  github: 'https://github.com/NeilSang0',
  ssrn1: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7251660',
  ssrn2: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7256019',
  solandor: 'https://solandor.co',
  bindler: 'https://bindler.pages.dev',
  apify: 'https://apify.com/bindler',
}
export const HERO_TAGLINE = 'a finance undergraduate and sustainable-finance researcher building the data behind the theory'
export const ABOUT_TEXT =
  "Finance undergraduate at RIT Dubai working at the intersection of sustainable finance and applied technology. I publish independent quantitative research with full methodology disclosure on SSRN, and I build and operate the data infrastructure behind it: Solandor, a free catalogue of clean energy projects and their funders, and Bindler, source-cited finance and sustainability workbooks. Let's build something worth checking."
export const FACTS = [
  { value: '2.0 bps', label: 'Sovereign greenium' },
  { value: '23 bps', label: 'CBAM Gulf tracking error' },
  { value: '98% avg', label: 'UNDP SDG Finance Academy' },
  { value: '#1 rank', label: 'Deloitte simulation' },
]
export const SERVICES = [
  { name: 'Empirical research', text: 'Independent quantitative notes on SSRN, built from primary-source government and market data with the full methodology and replication package disclosed.' },
  { name: 'Clean energy data', text: 'Solandor, a free catalogue of clean energy projects and the investors who fund them across the Gulf, South Asia and South East Asia, every record traced to a named public source.' },
  { name: 'Finance workbooks', text: 'Bindler: source-cited Excel workbooks for CSRD, SFDR, EU Taxonomy, CBAM, IFRS S2, GHG Protocol, PCAF, green bonds and solar, wind and battery storage project finance.' },
  { name: 'Data extraction', text: 'Seven production tools on Apify for LLM retrieval pipelines: PDF to Markdown, HTML tables, documentation sites, GitHub repositories, Zendesk, Discourse and WordPress.' },
  { name: 'Finance practice', text: 'Tally ERP entries, multi-currency bank and ledger reconciliation and Excel dataset work at GetMax DMCC; market-entry strategy with X-Culture; positioning for SYNK.' },
]
export const PROJECTS = [
  { name: 'Solandor', category: 'Founder', href: LINKS.solandor, images: ['shots/sol-home.jpg', 'shots/sol-projects.jpg', 'shots/sol-investors.jpg'] },
  { name: 'Bindler', category: 'Founder', href: LINKS.bindler, images: ['shots/bin-home.jpg', 'shots/bin-csrd.jpg', 'shots/bin-solar.jpg'] },
  { name: 'Research', category: 'Author', href: LINKS.ssrn1, images: ['shots/ssrn1.jpg', 'shots/ssrn2.jpg', 'shots/research.jpg'] },
]
export const ROW1 = ['sol-home', 'sol-projects', 'sol-investors', 'sol-markets', 'sol-about', 'sol-dev', 'bin-home', 'bin-csrd', 'bin-ifrs', 'bin-solar', 'bin-cbam'].map((n) => `shots/${n}.jpg`)
export const ROW2 = ['ssrn1', 'ssrn2', 'gh', 'apify', 'bin-ghg', 'bin-pcaf', 'bin-dcf', 'bin-tax', 'bin-green', 'bin-bess'].map((n) => `shots/${n}.jpg`)
export const EDUCATION = 'BSc Finance, Rochester Institute of Technology, Dubai (2024 to present). IB Diploma, Emirates International School, Jumeirah (2024).'
export const CREDENTIALS = 'Thirteen sustainability finance credentials from UNU-IAS, the UNDP SDG Finance Academy and Position Green. Eighteen employer job simulations with Citi, Goldman Sachs, BCG, Oliver Wyman and others. Basketball: captain at Dubai Tribe, Al Nasr Club, RIT Dubai.'

// Everything below is carried over from the previous build, verbatim in fact.
export const PAPERS = [
  {
    id: 'SSRN 7251660', kind: 'Working paper · Aug 2026', href: LINKS.ssrn1,
    title: "India's Sovereign Green Bonds: Did Investors Actually Pay a Premium for Green?",
    abstract: 'Tested for a "greenium" across seven matched sovereign auctions, finding green bonds priced on average 2.0 bps below the conventional curve (about ₹29 crore of annual saving). Showed the premium held only because the RBI cancelled or truncated auctions, a ₹10,302.6 crore borrowing shortfall, with genuine market demand appearing at the 30-year tenor while shorter maturities relied on constrained supply. Sourced entirely from DEA Public Debt Management reports and official auction data.',
    stats: [{ value: '2.0 bps', label: 'mean greenium' }, { value: '7', label: 'matched auctions' }, { value: '30Y', label: 'organic demand tenor' }],
  },
  {
    id: 'SSRN 7256019', kind: 'Working paper · Aug 2026', href: LINKS.ssrn2,
    title: 'What Does CBAM Actually Cost a Gulf Equity Investor?',
    abstract: "Measured how the EU's Carbon Border Adjustment Mechanism affects the top 27 ADX and DFM constituents (Aug 2023 to Jul 2026). Screening out CBAM-exposed names costs just 23 bps of annual tracking error, because a single constituent, Fertiglobe at 0.76% of market cap, drives the exposure. Flagged that the UAE's missing fertilizer default table forces Fertiglobe's ammonia and urea to face roughly double the per-tonne CBAM charge of identical Egyptian product.",
    stats: [{ value: 'Top 27', label: 'ADX / DFM universe' }, { value: '23 bps', label: 'annual tracking error' }, { value: '0.76%', label: 'Fertiglobe, exposure driver' }],
  },
]
export const EXPERIENCE = [
  { role: 'Finance & Accounts Intern', org: 'GetMax DMCC · Dubai, UAE', when: 'Jun to Aug 2026', text: 'Reviewed, verified and posted core financial entries in Tally ERP. Reconciled multi-currency bank statements and vendor balances. Cleaned and structured institutional financial datasets in Microsoft Excel and supported quantitative B2B lead generation streams.', tags: ['Tally ERP', 'Bank reconciliation', 'Ledger audit', 'Excel modeling'] },
  { role: 'Marketing & Business Development Intern', org: 'SYNK · Remote', when: 'Apr 2026', text: 'Developed the foundational company one-liner and core positioning messaging framework for an emerging AI virtual events platform, conducting competitor narrative audits and value proposition synthesis.', tags: ['Brand architecture', 'Product positioning', 'AI systems'] },
  { role: 'International Business Consultant', org: 'X-Culture Global', when: 'Jan to May 2025', text: 'Led a cross-continental virtual team as project coordinator. Formulated a comprehensive international market-entry strategy addressing marketing positioning, human resource operations, international supply-chain logistics and multi-tier product localisation.', tags: ['Market expansion', 'Cross-border operations', 'Logistics strategy'] },
]
const B = LINKS.bindler
export const CATALOGUE = [
  { group: 'EU disclosure & regulation', items: [['CSRD Double Materiality Assessment', `${B}/csrd-dma/`], ['SFDR PAI Statement, 14 mandatory indicators', `${B}/sfdr-pai/`], ['EU Taxonomy Alignment Screen and Article 8 KPIs', `${B}/eu-taxonomy/`], ['EU CBAM Cost Calculator 2026 to 2034', `${B}/cbam-calculator/`], ['EU AI Act Obligations', `${B}/eu-ai-act-obligations/`]] },
  { group: 'Climate, emissions & green finance', items: [['GHG Protocol Scope 1, 2 and 3 Inventory', `${B}/ghg-inventory/`], ['PCAF Financed Emissions Calculator', `${B}/pcaf-calculator/`], ['IFRS S2 Climate Disclosure', `${B}/ifrs-s2/`], ['Climate Transition Plan', `${B}/transition-plan/`], ['Green Bond Allocation and Impact Report', `${B}/green-bond-report/`]] },
  { group: 'Project & corporate finance', items: [['Solar PV Project Finance', `${B}/solar-pv-project-finance/`], ['Wind Project Finance', `${B}/wind-project-finance/`], ['BESS Project Finance', `${B}/bess-project-finance/`], ['Integrated 3-Statement DCF Valuation', `${B}/dcf-model/`], ['SaaS Financial Model, 36 months', `${B}/saas-model/`], ['UAE Corporate Tax', `${B}/uae-corporate-tax/`]] },
  { group: 'Services', items: [['Bespoke workbook builds', `${B}/bespoke-build/`], ['Advisory services', `${B}/services/`]] },
]
export const SHELVES = 'Sold through Gumroad with single, team and consultancy licences; listings in review on Eloquens, eFinancialModels and Flevy.'
export const SHELF_LINKS = [['Gumroad', 'https://bindler6.gumroad.com'], ['Eloquens', 'https://www.eloquens.com/channel/neil-sangwaiya-bindler']]
export const APIFY_TOOLS = [
  { name: 'PDF to Clean Markdown', text: 'Reconstructs exact reading order from raw bounding-box glyph coordinates; detects multi-column layouts and re-synthesizes hyphenated split words.' },
  { name: 'HTML Table Extractor', text: 'Expands irregular colspan and rowspan attributes into strict rectangular matrices, handling stacked multi-tier headers and ARIA tree branches.' },
  { name: 'Documentation Site Scraper', text: 'Framework-agnostic crawler for Docusaurus, Mintlify, GitBook, MkDocs and ReadTheDocs hierarchies without navigation noise.' },
  { name: 'GitHub Repo to RAG', text: 'Extracts full repositories into parsed AST trees in a single unified archive request, bypassing the 60 requests per hour unauthenticated rate threshold.' },
  { name: 'Zendesk, Discourse & WordPress Extractors', text: 'Three enterprise forum and CMS extractors with full taxonomy resolution, thread nesting preservation and cursor-based pagination recovery.' },
]
export const SOLANDOR_TEXT = 'B2B clean energy capital intelligence platform mapping renewable investments across the Gulf Cooperation Council, South Asia and Southeast Asia. Scheduled automated ingestion from regulatory filings, serverless edge microservices on Cloudflare Workers, cron pipelines and exponential backoff retry mechanics.'
export const SIMULATIONS = [
  { track: 'Banking, markets & asset management', items: [['Citi', 'Investment Banking: M&A valuation and financial spreading'], ['Bank of America', 'DCF model design and valuation sensitivity tables'], ['Goldman Sachs', 'Global Markets risk assessment'], ['Goldman Sachs', 'Asset Management operations'], ['Fidelity International', 'Quantitative portfolio optimisation and Sharpe ratio balancing'], ['Wells Fargo', 'Commercial Banking lending and credit structuring']] },
  { track: 'Strategy & climate finance', items: [['BCG', 'Climate & Sustainability net zero roadmapping'], ['BCG', 'Strategic management consulting'], ['Oliver Wyman', 'Climate and financed Scope 3 emissions'], ['ACCA', 'Sustainability and ESG integration in banking'], ['Clifford Chance', 'Climate change regulatory and disclosure directives']] },
  { track: 'M&A, PE & project finance', items: [['Goodwin', 'Private equity deal structuring and M&A'], ['DLA Piper', 'Corporate M&A for AI innovation'], ['Bryan Cave Leighton Paisner', 'Private equity and corporate M&A'], ['Bryan Cave Leighton Paisner', 'Real estate debt financing'], ['Mayer Brown', 'Financing renewable energy projects'], ['Ashurst', 'Energy and large-scale infrastructure projects'], ['Gateley', 'Corporate transactions and M&A law']] },
]
export const HONOURS = [
  { title: 'Elite basketball athlete & team captain', sub: 'Al Nasr Club · Dubai Tribe U16 & U19 · RIT Dubai men\'s team · 2018 to present', text: "6'6\" starting forward/center. Captained Dubai Tribe across both U16 and U19 divisions. Competed internationally in European club tournaments in Austria and GCC tournaments in Oman. Selected for elite athlete development at Combine Academy in North Carolina, USA. Recipient of multiple tournament MVP citations." },
  { title: '1st place overall, Deloitte Business Simulation', sub: 'Edumundo · Oct 2025', text: 'Ranked 1st among all participating university teams internationally in financial ratio analysis, capital allocation and sustained profitability.' },
  { title: 'Selected participant, Entrepreneurship Bootcamp', sub: 'RIT Dubai · Feb 2026', text: 'Completed intensive Harvard Business Impact Simulation on high-velocity venture building, market scaling and early-stage cap table management.' },
  { title: 'Co-Chair, G20 Committee', sub: 'Model United Nations · 2023', text: 'Moderated multilateral economic policy debates, financial stability directives and sovereign debt restructuring resolutions for diplomatic delegates.' },
]
export const UNDP = { title: 'UNDP SDG Finance Academy', sub: 'United Nations Development Programme · 6 assessed courses · 98% overall average', courses: [['Sustainable Finance & SDG Academy', '100%'], ['Finance for Climate & Energy', '100%'], ['Integrated Financing Frameworks', '100%'], ['Public Finance & SDG Budgeting', '100%'], ['Impact Measurement & Management', '95%'], ['Unlocking Private Capital', '94%']] }
export const POSITION_GREEN = { title: 'Position Green Academy', sub: 'European ESG disclosure compliance', items: ['CSRD / ESRS regulatory mechanics', 'SFDR classification and fund disclosure', 'GHG Protocol: foundations', 'Carbon footprinting and net-zero planning', 'VSME reporting standard', 'Circular economy frameworks', 'UN Sustainable Development Goals'] }
export const UNU = { title: 'UNU-IAS, Net Zero 101', sub: 'United Nations University, Institute for the Advanced Study of Sustainability', text: 'Decarbonisation pathways, climate science fundamentals, carbon offset integrity and international emissions accounting standards.' }
export const SKILLS = [
  { name: 'Finance & valuation', text: 'DCF modeling, sensitivity analysis, greenium empirical pricing, yield-curve matched analysis, asset allocation, ratio analysis, Tally ERP.' },
  { name: 'Sustainability & ESG', text: 'CSRD / ESRS, SFDR classification, GHG Protocol Scope 1 to 3, CBAM carbon tariffs, SDG impact measurement, climate risk assessment.' },
  { name: 'Data & tooling', text: 'Python, document parsing (PDF glyph coordinate reconstruction), HTML table matrix extraction, Cloudflare Workers, edge RAG pipelines, Git.' },
  { name: 'Tools & workflows', text: 'Apify SDK, Microsoft Excel and advanced spreads, Bloomberg Terminal navigation, Google Analytics, Jira, Postman, Cursor.' },
  { name: 'Professional competencies', text: 'Global cross-functional coordination (X-Culture), diplomatic moderation (MUN chair).' },
  { name: 'Certifications', text: 'Google AI Essentials (5-course series), Google Analytics and Google Ads, Coursera Investment Risk Management, Business Analysis and Process Management, Advanced Microsoft Excel and BMC Strategy, ABRSM Music Theory Grade 5 and Trumpet Grade 3.' },
  { name: 'Languages', text: 'English and Hindi, native and fluent bilingual.' },
]
export const SCHOOLS = [
  { name: 'Rochester Institute of Technology, Dubai', degree: 'BSc Finance · GPA 3.1', when: '2024 to present', text: 'Coursework in financial modeling, corporate valuation, asset pricing, capital markets and econometric analysis.' },
  { name: 'Emirates International School, Jumeirah', degree: 'International Baccalaureate Diploma Programme', when: 'Graduated 2024', text: 'Appointed School Prefect. Economics, mathematics and sciences.' },
  { name: 'Dubai International Academy', degree: 'IB Middle Years Programme', when: '2020 to 2022', text: '' },
  { name: 'Lancers International School', degree: 'IB Primary and Middle Years Programme', when: '2014 to 2020', text: '' },
]
export const FAQ = [
  { q: "What are Neil Sangwaiya's primary empirical research specializations?", a: "My empirical research targets the pricing dynamics of sovereign green debt and cross-border regulatory environmental tariffs. On SSRN, I have published primary econometric investigations into India's Sovereign Green Bonds (quantifying the 2.0 bps greenium and analyzing auction truncation mechanics) as well as the quantitative equity risk of the EU's Carbon Border Adjustment Mechanism (CBAM) on ADX and DFM benchmark indices." },
  { q: 'What technical infrastructure and data products has Neil developed?', a: 'I build and maintain production RAG and AI extraction tooling. Through Bindler (bindler.pages.dev), I build and sell source-cited Excel workbooks for sustainability disclosure, climate reporting and project finance, from CSRD and IFRS S2 to solar, wind and battery storage models, and I have authored seven data extraction tools on Apify that reconstruct reading order from raw PDF glyph coordinates, resolve irregular HTML tables, and ingest complex developer documentation. Additionally, I founded Solandor (solandor.co), a clean energy capital tracking platform powered by Cloudflare Workers and automated cron scrapers.' },
  { q: "What is Neil's background as a student athlete?", a: 'Standing 6′6″, I have competed at elite levels in basketball since 2018. I served as team captain for Dubai Tribe (U16 and U19 divisions), played for Al Nasr Club, and currently compete for RIT Dubai. My athletic development includes international tournaments across Europe and the GCC, as well as high-intensity training at Combine Academy in North Carolina, USA.' },
  { q: 'How does Neil bridge finance theory with the tools behind it?', a: 'Instead of relying on aggregated commercial datasets with opaque methodology, I engineer custom extraction harnesses that scrape, parse, and structure primary source government and corporate filings (DEA reports, reserve bank auction notices, EU CBAM annexes). This end-to-end provenance guarantees complete methodological transparency and reproducible statistical findings.' },
]
