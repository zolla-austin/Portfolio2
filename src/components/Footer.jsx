import { Github, Linkedin, Twitter, Globe, Heart } from 'lucide-react'

const links = ['About', 'Tech Stack', 'Projects', 'Services', 'Contact']
const socials = [
  { icon: Github, href: 'https://github.com/zolla-austin', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Globe, href: '#', label: 'Dribbble' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const sectionId = id.toLowerCase().replace(/\s+/g, '-')
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-display font-black text-xl tracking-tight mb-1 text-primary">
              Z<span className="text-accent">.</span>
              <span className="text-muted text-sm ml-1">Austine</span>
            </div>
            <p className="text-caption">Software Engineer · Lagos, Nigeria</p>
          </div>

          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="nav-link"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption text-muted/60">
            © {new Date().getFullYear()} Zolla Austine. All rights reserved.
          </p>
          <p className="text-caption text-muted/60 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-rose" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
