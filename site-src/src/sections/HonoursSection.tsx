import Section, { NumberedList } from '../components/Section'
import { HONOURS } from '../content'

export default function HonoursSection() {
  return (
    <Section id="honours" tone="dark" title="Honours" kicker="Athletics, leadership and competitive recognition" z={60}>
      <NumberedList tone="dark" items={HONOURS.map((h) => ({ title: h.title, sub: h.sub, text: h.text }))} />
    </Section>
  )
}
