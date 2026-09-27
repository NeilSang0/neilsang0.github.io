import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { ContactButton } from '../components/Buttons'
import { NAV, HERO_TAGLINE, FACTS } from '../content'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-16 lg:px-20 pt-6 md:pt-8 relative z-20" aria-label="Main">
        {NAV.map((n) => (
          <a key={n.label} href={n.href} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-base lg:text-lg hover:opacity-70 transition-opacity duration-200">
            {n.label}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center">
        <div className="overflow-hidden">
          <FadeIn as="h1" delay={0.15} y={40} className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[11.5vw] md:text-[12vw] lg:text-[12.5vw]">
            Hi, i&apos;m neil
          </FadeIn>
        </div>

        {/* The portrait used to sit here. The figures carry the space now. */}
        <Magnet padding={120} strength={6} className="px-6 md:px-16 lg:px-20 mt-10 sm:mt-14 md:mt-16">
          <FadeIn delay={0.6} y={30} className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 max-w-5xl mx-auto w-full">
            {FACTS.map((f) => (
              <div key={f.label} className="text-center">
                <div className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.9rem)' }}>{f.value}</div>
                <div className="text-[#D7E2EA] font-light uppercase tracking-widest mt-2 opacity-70" style={{ fontSize: 'clamp(0.58rem, 0.82vw, 0.78rem)' }}>{f.label}</div>
              </div>
            ))}
          </FadeIn>
        </Magnet>
      </div>

      <div className="flex justify-between items-end px-6 md:px-16 lg:px-20 pb-8 sm:pb-10 md:pb-12 relative z-20">
        <FadeIn as="p" delay={0.35} y={20} className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.68rem, 1vw, 1.05rem)' }}>
          {HERO_TAGLINE}
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
