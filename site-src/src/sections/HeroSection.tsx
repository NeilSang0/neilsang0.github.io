import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { ContactButton } from '../components/Buttons'
import { NAV, HERO_TAGLINE } from '../content'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-14 pt-6 md:pt-8 relative z-20" aria-label="Main">
        {NAV.map((n) => (
          <a key={n.label} href={n.href} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-base lg:text-lg hover:opacity-70 transition-opacity duration-200">
            {n.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-5">
          Hi, i&apos;m neil
        </FadeIn>
      </div>

      <Magnet padding={150} strength={3} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <img
            src="neil.jpg"
            srcSet="neil-sm.jpg 420w, neil.jpg 900w"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 440px, 520px"
            width={900}
            height={1200}
            alt="Neil Sangwaiya, Dubai"
            className="w-full h-auto block rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] object-cover"
            style={{ height: 'clamp(300px, 62vh, 700px)', objectPosition: '50% 38%' }}
            decoding="async"
          />
        </FadeIn>
      </Magnet>

      <div className="mt-auto flex justify-between items-end px-6 md:px-14 pb-8 sm:pb-10 md:pb-12 relative z-20">
        <FadeIn as="p" delay={0.35} y={20} className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1.25rem)' }}>
          {HERO_TAGLINE}
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
