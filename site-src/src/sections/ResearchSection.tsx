import FadeIn from '../components/FadeIn'
import Section from '../components/Section'
import { LiveProjectButton } from '../components/Buttons'
import { PAPERS } from '../content'

export default function ResearchSection() {
  return (
    <Section id="research" tone="dark" title="Research" kicker="Open archive · working papers · full replication packages" z={20}>
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
        {PAPERS.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.15} className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-12 flex flex-col gap-6 md:gap-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 max-w-3xl">
                <p className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-70">{p.id} · {p.kind}</p>
                <h3 className="hero-heading font-black leading-tight mt-2" style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.8rem)' }}>{p.title}</h3>
              </div>
              <LiveProjectButton href={p.href} label="Read on SSRN" />
            </div>
            <p className="text-[#D7E2EA] font-light leading-relaxed max-w-3xl" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)', opacity: 0.75 }}>{p.abstract}</p>
            <div className="flex flex-wrap gap-8 sm:gap-12 pt-4" style={{ borderTop: '1px solid rgba(215,226,234,0.15)' }}>
              {p.stats.map((s) => (
                <div key={s.label}>
                  <div className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}>{s.value}</div>
                  <div className="text-[#D7E2EA] font-light uppercase tracking-wider text-xs sm:text-sm mt-1 opacity-70">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
