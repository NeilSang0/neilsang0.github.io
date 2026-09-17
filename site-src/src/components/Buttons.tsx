export function ContactButton({ href = '#contact', label = 'Contact Me' }: { href?: string; label?: string }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-[0.7rem] sm:text-xs md:text-sm transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #fff',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}

export function LiveProjectButton({ href, label = 'Live Project' }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10 whitespace-nowrap"
    >
      {label}
    </a>
  )
}
