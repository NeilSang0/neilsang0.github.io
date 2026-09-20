import { useEffect, useRef, useState } from 'react'
import { ROW1, ROW2 } from '../content'

function Row({ images, dir, offset }: { images: string[]; dir: 1 | -1; offset: number }) {
  const tripled = [...images, ...images, ...images]
  return (
    <div className="flex gap-3" style={{ transform: `translateX(${dir * (offset - 200)}px)`, willChange: 'transform', width: 'max-content' }}>
      {tripled.map((src, i) => (
        <img key={i} src={src} alt="" loading="lazy" decoding="async" width={420} height={270} className="w-[420px] h-[270px] rounded-2xl object-cover object-top flex-none bg-[#161616]" />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY
      setOffset((window.scrollY - top + window.innerHeight) * 0.3)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <section ref={ref} className="pt-16 sm:pt-20 md:pt-28 pb-8 flex flex-col gap-3 overflow-hidden" style={{ background: '#0C0C0C' }} aria-label="Pages Neil has built">
      <Row images={ROW1} dir={1} offset={offset} />
      <Row images={ROW2} dir={-1} offset={offset} />
    </section>
  )
}
