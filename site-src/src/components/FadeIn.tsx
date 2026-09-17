import { motion, type HTMLMotionProps } from 'framer-motion'
import { useMemo, type ElementType, type ReactNode } from 'react'

type Props = { as?: ElementType; delay?: number; duration?: number; x?: number; y?: number; className?: string; style?: React.CSSProperties; children: ReactNode } & Omit<HTMLMotionProps<'div'>, 'children' | 'style'>

export default function FadeIn({ as = 'div', delay = 0, duration = 0.7, x = 0, y = 30, className, style, children, ...rest }: Props) {
  const M = useMemo(() => motion.create(as as ElementType), [as])
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}
