import FadeIn from '../components/FadeIn'
import Section from '../components/Section'
import { FAQ } from '../content'

// Visible text is the same string the FAQPage schema carries, by construction.
export default function FaqSection() {
  return (
    <Section id="faq" tone="dark" title="FAQ" kicker="Frequent inquiries and clarifications" z={100}>
      <dl className="max-w-4xl mx-auto">
        {FAQ.map((f, i) => (
          <FadeIn key={f.q} delay={i * 0.1} className="py-8 sm:py-10" style={{ borderTop: '1px solid rgba(215,226,234,0.15)', borderBottom: i === FAQ.length - 1 ? '1px solid rgba(215,226,234,0.15)' : undefined }}>
            <dt className="text-[#D7E2EA] font-medium uppercase leading-tight" style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.35rem)' }}>{f.q}</dt>
            <dd className="text-[#D7E2EA] font-light leading-relaxed mt-4" style={{ opacity: 0.7, fontSize: 'clamp(0.85rem, 1.25vw, 0.98rem)' }}>{f.a}</dd>
          </FadeIn>
        ))}
      </dl>
    </Section>
  )
}
