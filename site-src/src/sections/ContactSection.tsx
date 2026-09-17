import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { EMAIL, LINKS, EDUCATION, CREDENTIALS } from '../content'

const ROUTES = [
  { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Linkedin, label: 'linkedin.com/in/neilsangwaiya', href: LINKS.linkedin },
  { icon: Github, label: 'github.com/NeilSang0', href: LINKS.github },
  { icon: FileText, label: 'SSRN: sovereign green bonds', href: LINKS.ssrn1 },
  { icon: FileText, label: 'SSRN: CBAM and Gulf equities', href: LINKS.ssrn2 },
]

export default function ContactSection() {
  return (
    <footer id="contact" className="px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-12" style={{ background: '#0C0C0C' }}>
      <FadeIn as="h2" y={40} className="hero-heading font-black uppercase text-center leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Contact
      </FadeIn>
      <FadeIn delay={0.15} className="max-w-3xl mx-auto mt-12 sm:mt-16 flex flex-col gap-2">
        {ROUTES.map((r) => (
          <a key={r.href} href={r.href} target={r.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4 text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200" style={{ borderBottom: '1px solid rgba(215,226,234,0.15)' }}>
            <span className="flex items-center gap-4 font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg"><r.icon size={20} strokeWidth={1.5} />{r.label}</span>
            <ArrowUpRight size={20} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ))}
      </FadeIn>
      <FadeIn delay={0.3} className="max-w-3xl mx-auto mt-12 text-[#D7E2EA] font-light leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', opacity: 0.7 }}>
        <p>{EDUCATION}</p>
        <p className="mt-3">{CREDENTIALS}</p>
        <p className="mt-8 text-xs uppercase tracking-widest opacity-70">Neil Sangwaiya · Dubai, United Arab Emirates</p>
      </FadeIn>
    </footer>
  )
}
