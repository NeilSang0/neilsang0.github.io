import FadeIn from '../components/FadeIn'
import Section, { NumberedList } from '../components/Section'
import { LiveProjectButton } from '../components/Buttons'
import { CATALOGUE, SHELVES, SHELF_LINKS, APIFY_TOOLS, SOLANDOR_TEXT, LINKS } from '../content'

const c = '#D7E2EA'

export default function BuildingSection() {
  return (
    <Section id="building" tone="dark" title="Building" kicker="Production pipelines and platforms" z={40}>
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-20">
        <FadeIn className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-light uppercase tracking-widest text-xs sm:text-sm opacity-70" style={{ color: c }}>Founder · 2026 · live</p>
              <h3 className="hero-heading font-black leading-tight mt-2" style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.8rem)' }}>Bindler: source-cited finance & sustainability workbooks</h3>
            </div>
            <div className="flex flex-wrap gap-3"><LiveProjectButton href={LINKS.bindler} label="bindler.pages.dev" /><LiveProjectButton href={LINKS.apify} label="Apify" /></div>
          </div>
          <p className="font-light leading-relaxed max-w-3xl mt-6" style={{ color: c, opacity: 0.75, fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}>
            Ready-to-use Excel workbooks for sustainability disclosure, climate reporting and project finance, every figure and threshold cited to the regulation or standard it comes from. {SHELVES}{' '}
            {SHELF_LINKS.map(([l, h]) => <a key={h} href={h} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70">{l} ↗ </a>)}
          </p>
          <div className="grid sm:grid-cols-2 gap-8 mt-10">
            {CATALOGUE.map((g) => (
              <div key={g.group}>
                <h4 className="font-medium uppercase tracking-widest text-xs sm:text-sm mb-3" style={{ color: c }}>{g.group}</h4>
                <ul className="flex flex-col gap-2">
                  {g.items.map(([name, href]) => (
                    <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="font-light hover:opacity-70 transition-opacity duration-200" style={{ color: c, fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>{name} ↗</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <div>
          <FadeIn as="h3" className="font-medium uppercase tracking-widest text-center mb-8" style={{ color: c, fontSize: 'clamp(0.9rem, 1.6vw, 1.3rem)' }}>Seven data extraction tools on Apify, built for LLM retrieval pipelines</FadeIn>
          <NumberedList tone="dark" items={APIFY_TOOLS.map((t) => ({ title: t.name, text: t.text }))} />
        </div>

        <FadeIn className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-light uppercase tracking-widest text-xs sm:text-sm opacity-70" style={{ color: c }}>Founder & developer · 2026 to present · live system</p>
              <h3 className="hero-heading font-black leading-tight mt-2" style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.8rem)' }}>Solandor: clean energy data platform</h3>
            </div>
            <LiveProjectButton href={LINKS.solandor} label="solandor.co" />
          </div>
          <p className="font-light leading-relaxed max-w-3xl mt-6" style={{ color: c, opacity: 0.75, fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}>{SOLANDOR_TEXT}</p>
        </FadeIn>
      </div>
    </Section>
  )
}
