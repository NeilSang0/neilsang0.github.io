import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { ContactButton } from '../components/Buttons'
import { ABOUT_TEXT } from '../content'

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-20" style={{ background: '#0C0C0C' }}>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(2rem, 7.5vw, 104px)' }}>
          About me
        </FadeIn>
        <AnimatedText text={ABOUT_TEXT} className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]" style={{ fontSize: 'clamp(0.9rem, 1.45vw, 1.08rem)' }} />
      </div>
      <div className="mt-12 sm:mt-14 md:mt-16">
        <ContactButton />
      </div>
    </section>
  )
}
