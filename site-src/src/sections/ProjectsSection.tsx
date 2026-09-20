import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import { LiveProjectButton } from '../components/Buttons'
import { PROJECTS } from '../content'

function Card({ p, index, total, progress }: { p: (typeof PROJECTS)[number]; index: number; total: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const start = index / total
  const scale = useTransform(progress, [start, 1], [1, targetScale])
  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.article
        style={{ scale, background: '#0C0C0C' }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 origin-top"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.4rem, 8vw, 110px)' }}>0{index + 1}</span>
            <div>
              <div className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-70">{p.category}</div>
              <h3 className="text-[#D7E2EA] font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 2rem)' }}>{p.name}</h3>
            </div>
          </div>
          <LiveProjectButton href={p.href} />
        </div>
        <div className="grid grid-cols-[40%_1fr] gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img src={p.images[0]} alt={`${p.name}, screen one`} loading="lazy" className="w-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]" style={{ height: 'clamp(130px, 16vw, 230px)' }} />
            <img src={p.images[1]} alt={`${p.name}, screen two`} loading="lazy" className="w-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]" style={{ height: 'clamp(160px, 22vw, 340px)' }} />
          </div>
          <img src={p.images[2]} alt={`${p.name}, screen three`} loading="lazy" className="w-full h-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]" />
        </div>
      </motion.article>
    </div>
  )
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return (
    <section id="projects" className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-6 sm:px-10 md:px-14 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24" style={{ background: '#0C0C0C', zIndex: 10 }}>
      <FadeIn as="h2" y={40} className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-8 sm:mb-10" style={{ fontSize: 'clamp(2.4rem, 9.5vw, 128px)' }}>
        Project
      </FadeIn>
      <div ref={ref}>
        {PROJECTS.map((p, i) => <Card key={p.name} p={p} index={i} total={PROJECTS.length} progress={scrollYProgress} />)}
      </div>
    </section>
  )
}
