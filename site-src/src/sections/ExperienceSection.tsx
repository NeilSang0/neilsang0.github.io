import Section, { NumberedList } from '../components/Section'
import { EXPERIENCE } from '../content'

export default function ExperienceSection() {
  return (
    <Section id="experience" tone="light" title="Experience" kicker="Operational industry roles" z={30}>
      <NumberedList tone="light" items={EXPERIENCE.map((e) => ({ title: e.role, sub: `${e.org} · ${e.when}`, text: e.text, tags: e.tags }))} />
    </Section>
  )
}
