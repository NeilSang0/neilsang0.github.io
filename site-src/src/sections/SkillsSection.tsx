import Section, { NumberedList } from '../components/Section'
import { SKILLS } from '../content'

export default function SkillsSection() {
  return (
    <Section id="skills" tone="dark" title="Skills" kicker="Technical and domain capacities" z={80}>
      <NumberedList tone="dark" items={SKILLS.map((s) => ({ title: s.name, text: s.text }))} />
    </Section>
  )
}
