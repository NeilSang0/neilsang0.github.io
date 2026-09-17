import FadeIn from '../components/FadeIn'
import Section from '../components/Section'
import { UNDP, POSITION_GREEN, UNU } from '../content'

const rule = '1px solid rgba(12,12,12,0.15)'

export default function CredentialsSection() {
  return (
    <Section id="credentials" tone="light" title="Credentials" kicker="13 assessed sustainability and ESG certifications" z={70}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        <FadeIn>
          <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.5rem)' }}>{UNDP.title}</h3>
          <p className="text-[#0C0C0C] font-light uppercase tracking-widest text-xs mt-2 mb-6" style={{ opacity: 0.6 }}>{UNDP.sub}</p>
          <ul>
            {UNDP.courses.map(([name, score]) => (
              <li key={name} className="flex justify-between items-baseline gap-4 py-3" style={{ borderTop: rule }}>
                <span className="text-[#0C0C0C] font-light" style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}>{name}</span>
                <span className="text-[#0C0C0C] font-black tabular-nums" style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.5rem)' }}>{score}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <div className="flex flex-col gap-12">
          <FadeIn delay={0.1}>
            <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.5rem)' }}>{POSITION_GREEN.title}</h3>
            <p className="text-[#0C0C0C] font-light uppercase tracking-widest text-xs mt-2 mb-6" style={{ opacity: 0.6 }}>{POSITION_GREEN.sub}</p>
            <ul>
              {POSITION_GREEN.items.map((it) => <li key={it} className="text-[#0C0C0C] font-light py-3" style={{ borderTop: rule, fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}>{it}</li>)}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.5rem)' }}>{UNU.title}</h3>
            <p className="text-[#0C0C0C] font-light uppercase tracking-widest text-xs mt-2 mb-4" style={{ opacity: 0.6 }}>{UNU.sub}</p>
            <p className="text-[#0C0C0C] font-light leading-relaxed" style={{ opacity: 0.6, fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}>{UNU.text}</p>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
