import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

function Char({ c, i, n, progress }: { c: string; i: number; n: number; progress: MotionValue<number> }) {
  const start = i / n, end = start + 1 / n
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{c}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>{c}</motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const words = text.split(' ')
  let idx = 0
  const n = text.length
  return (
    <p ref={ref} className={className} style={style}>
      {words.map((w, wi) => {
        const chars = w.split('').map((c) => <Char key={idx} c={c} i={idx++} n={n} progress={scrollYProgress} />)
        idx++ // the space
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        )
      })}
    </p>
  )
}
