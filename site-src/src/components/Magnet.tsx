import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = { children: ReactNode; padding?: number; strength?: number; activeTransition?: string; inactiveTransition?: string; className?: string }

export default function Magnet({ children, padding = 100, strength = 2, activeTransition = 'transform 0.3s ease-out', inactiveTransition = 'transform 0.6s ease-in-out', className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2
      const dx = Math.abs(cx - e.clientX), dy = Math.abs(cy - e.clientY)
      if (dx < r.width / 2 + padding && dy < r.height / 2 + padding) {
        setActive(true)
        setPos({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength })
      } else {
        setActive(false)
        setPos({ x: 0, y: 0 })
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`, transition: active ? activeTransition : inactiveTransition, willChange: 'transform' }}>
      {children}
    </div>
  )
}
