// Every line here is Neil's own information, carried over from the previous
// build of the site. Nothing is invented; figures come from the SSRN papers.
export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
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
