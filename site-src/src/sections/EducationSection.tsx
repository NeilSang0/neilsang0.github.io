import Section, { NumberedList } from '../components/Section'
import { SCHOOLS } from '../content'

export default function EducationSection() {
  return (
    <Section id="education" tone="light" title="Education" kicker="Formal qualifications" z={90}>
      <NumberedList tone="light" items={SCHOOLS.map((s) => ({ title: s.name, sub: `${s.degree} · ${s.when}`, text: s.text || undefined }))} />
    </Section>
  )
}
