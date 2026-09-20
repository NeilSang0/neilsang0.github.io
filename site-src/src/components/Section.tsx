import type { CSSProperties, ReactNode } from 'react'
import FadeIn from './FadeIn'

// Every block after the hero is a rounded sheet laid over the previous one,
// the way the Work and Projects sheets stack in the original spec.
export default function Section({ id, tone, title, kicker, z, children, className = '' }: { id: string; tone: 'dark' | 'light'; title: string; kicker?: string; z: number; children: ReactNode; className?: string }) {
  const dark = tone === 'dark'
  const style: CSSProperties = { background: dark ? '#0C0C0C' : '#FFFFFF', zIndex: z, position: 'relative' }
  return (
    <section id={id} className={`rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-6 sm:px-10 md:px-14 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-28 ${className}`} style={style}>
      <FadeIn as="h2" y={40} className={`${dark ? 'hero-heading' : 'text-[#0C0C0C]'} font-black uppercase text-center leading-none tracking-tight`} style={{ fontSize: 'clamp(2.4rem, 9.5vw, 128px)' }}>
        {title}
      </FadeIn>
      {kicker && (
        <FadeIn as="p" delay={0.1} className={`${dark ? 'text-[#D7E2EA]' : 'text-[#0C0C0C]'} text-center font-light uppercase tracking-widest mt-4 sm:mt-6`} style={{ fontSize: 'clamp(0.65rem, 1.05vw, 0.85rem)', opacity: 0.6 }}>
          {kicker}
        </FadeIn>
      )}
      <div className="mt-12 sm:mt-14 md:mt-20">{children}</div>
    </section>
  )
}

export const ink = (tone: 'dark' | 'light') => (tone === 'dark' ? '#D7E2EA' : '#0C0C0C')
export const rule = (tone: 'dark' | 'light') => (tone === 'dark' ? '1px solid rgba(215,226,234,0.15)' : '1px solid rgba(12,12,12,0.15)')

export function NumberedList({ tone, items }: { tone: 'dark' | 'light'; items: { title: string; sub?: string; text?: string; tags?: string[]; href?: string }[] }) {
  const c = ink(tone)
  return (
    <ol className="max-w-5xl mx-auto">
      {items.map((it, i) => (
        <FadeIn as="li" key={it.title + i} delay={i * 0.1} className="flex gap-5 sm:gap-8 md:gap-10 items-start py-6 sm:py-8 md:py-10" style={{ borderTop: rule(tone), borderBottom: i === items.length - 1 ? rule(tone) : undefined }}>
          <span className={`${tone === 'dark' ? 'hero-heading' : 'text-[#0C0C0C]'} font-black leading-none flex-none`} style={{ fontSize: 'clamp(2.4rem, 8vw, 110px)' }}>{String(i + 1).padStart(2, '0')}</span>
          <div className="flex flex-col gap-3 pt-2 min-w-0">
            <h3 className="font-medium uppercase leading-tight" style={{ color: c, fontSize: 'clamp(0.95rem, 1.8vw, 1.7rem)' }}>
              {it.href ? <a href={it.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-200">{it.title} ↗</a> : it.title}
            </h3>
            {it.sub && <p className="font-light uppercase tracking-widest" style={{ color: c, opacity: 0.6, fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}>{it.sub}</p>}
            {it.text && <p className="font-light leading-relaxed max-w-2xl" style={{ color: c, opacity: 0.6, fontSize: 'clamp(0.8rem, 1.35vw, 1.05rem)' }}>{it.text}</p>}
            {it.tags && (
              <ul className="flex flex-wrap gap-2 mt-2">
                {it.tags.map((t) => <li key={t} className="rounded-full border px-3 py-1 text-xs uppercase tracking-wider" style={{ color: c, borderColor: tone === 'dark' ? 'rgba(215,226,234,0.3)' : 'rgba(12,12,12,0.25)' }}>{t}</li>)}
              </ul>
            )}
          </div>
        </FadeIn>
      ))}
    </ol>
  )
}
