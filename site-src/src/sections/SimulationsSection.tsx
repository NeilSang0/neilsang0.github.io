import FadeIn from '../components/FadeIn'
import Section from '../components/Section'
import { SIMULATIONS } from '../content'

export default function SimulationsSection() {
  return (
    <Section id="simulations" tone="light" title="Virtual Experiences" kicker="18 Forage programmes issued by global firms" z={50}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 md:gap-8">
        {SIMULATIONS.map((t, i) => (
          <FadeIn key={t.track} delay={i * 0.12} className="flex flex-col">
            <span className="text-[#0C0C0C] font-black leading-none" style={{ fontSize: 'clamp(2.4rem, 6.5vw, 88px)' }}>{String(t.items.length).padStart(2, '0')}</span>
            <h3 className="text-[#0C0C0C] font-medium uppercase mt-3 mb-5" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.3rem)' }}>{t.track}</h3>
            <ul className="flex flex-col">
              {t.items.map(([firm, what], j) => (
                <li key={firm + j} className="py-3" style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }}>
                  <div className="text-[#0C0C0C] font-medium" style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}>{firm}</div>
                  <div className="text-[#0C0C0C] font-light" style={{ opacity: 0.6, fontSize: 'clamp(0.75rem, 1.1vw, 0.88rem)' }}>{what}</div>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
