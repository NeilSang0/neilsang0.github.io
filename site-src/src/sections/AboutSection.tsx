import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { ContactButton } from '../components/Buttons'
import { ABOUT_TEXT, FACTS } from '../content'

// The four corners carry Neil's own numbers in place of decorative props.
const CORNERS = [
  { cls: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]', delay: 0.1, x: -80 },
  { cls: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]', delay: 0.25, x: -80 },
  { cls: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] text-right', delay: 0.15, x: 80 },
  { cls: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] text-right', delay: 0.3, x: 80 },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20" style={{ background: '#0C0C0C' }}>
      {FACTS.map((f, i) => (
        <FadeIn key={f.label} delay={CORNERS[i].delay} x={CORNERS[i].x} y={0} duration={0.9} className={`absolute ${CORNERS[i].cls} w-[120px] sm:w-[160px] md:w-[210px]`}>
          <div className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(1.6rem, 3.6vw, 3.2rem)' }}>{f.value}</div>
          <div className="text-[#D7E2EA] font-light uppercase tracking-wider mt-1" style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.85rem)' }}>{f.label}</div>
        </FadeIn>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          About me
        </FadeIn>
        <AnimatedText text={ABOUT_TEXT} className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }} />
      </div>
      <div className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </div>
    </section>
  )
}
