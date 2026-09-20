import FadeIn from '../components/FadeIn'
import { SERVICES } from '../content'

export default function ServicesSection() {
  return (
    <section id="work" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-10 md:px-14 py-16 sm:py-20 md:py-24 relative">
      <FadeIn as="h2" y={40} className="text-[#0C0C0C] font-black uppercase text-center mb-12 sm:mb-14 md:mb-20 leading-none" style={{ fontSize: 'clamp(2.4rem, 9.5vw, 128px)' }}>
        Work
      </FadeIn>
      <ol className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn as="li" key={s.name} delay={i * 0.1} className="flex gap-5 sm:gap-8 md:gap-10 items-start py-6 sm:py-8 md:py-10" style={{ borderTop: '1px solid rgba(12,12,12,0.15)', borderBottom: i === SERVICES.length - 1 ? '1px solid rgba(12,12,12,0.15)' : undefined }}>
            <span className="text-[#0C0C0C] font-black leading-none flex-none" style={{ fontSize: 'clamp(2.4rem, 8vw, 110px)' }}>0{i + 1}</span>
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-[#0C0C0C] font-medium uppercase leading-tight" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.7rem)' }}>{s.name}</h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.8rem, 1.35vw, 1.05rem)', opacity: 0.6 }}>{s.text}</p>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  )
}
