import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { EMAIL, LINKS } from '../content'

const ROUTES = [
  { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Linkedin, label: 'linkedin.com/in/neilsangwaiya', href: LINKS.linkedin },
  { icon: Github, label: 'github.com/NeilSang0', href: LINKS.github },
  { icon: FileText, label: 'SSRN: sovereign green bonds', href: LINKS.ssrn1 },
  { icon: FileText, label: 'SSRN: CBAM and Gulf equities', href: LINKS.ssrn2 },
]

export default function ContactSection() {
  return (
    <footer id="contact" className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-6 sm:px-10 md:px-14 pt-16 sm:pt-20 pb-10" style={{ background: '#FFFFFF', zIndex: 110 }}>
      <FadeIn as="h2" y={40} className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight" style={{ fontSize: 'clamp(2.4rem, 9.5vw, 128px)' }}>
        Contact
      </FadeIn>
      <FadeIn delay={0.15} className="max-w-3xl mx-auto mt-12 sm:mt-16 flex flex-col gap-2">
        {ROUTES.map((r) => (
          <a key={r.href} href={r.href} target={r.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4 text-[#0C0C0C] hover:opacity-70 transition-opacity duration-200" style={{ borderBottom: '1px solid rgba(12,12,12,0.15)' }}>
            <span className="flex items-center gap-4 font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base"><r.icon size={20} strokeWidth={1.5} />{r.label}</span>
            <ArrowUpRight size={20} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ))}
      </FadeIn>
      <FadeIn delay={0.3} className="max-w-3xl mx-auto mt-12 text-[#0C0C0C] font-light leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 1.15vw, 0.95rem)', opacity: 0.7 }}>
        <p className="mt-8 text-xs uppercase tracking-widest opacity-70">Neil Sangwaiya · Dubai, United Arab Emirates</p>
      </FadeIn>
    </footer>
  )
}
