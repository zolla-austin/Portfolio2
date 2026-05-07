import { useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Globe } from 'lucide-react'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/zolla-austin' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/zolla-austine-9b02a5376' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/zollaaustin?igsh=M3F6ZDlyOHdsYWFx' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">// Contact</span>
          <h2 className="font-display font-black text-4xl md:text-5xl xl:text-6xl tracking-tighter mt-3 leading-none">
            Let's build something<br />
            <span className="text-accent">great together.</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto mt-5 text-base font-light leading-relaxed">
            Have a project in mind or want to collaborate? Reach out — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact info + socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Contact items */}
            {[
              { icon: Mail, label: 'Email', value: 'cletusidu9@gmail.com', href: 'mailto:cletusidu9@gmail.com' },
              { icon: Phone, label: 'Phone', value: '07041793529', href: 'tel:07041793529' },
              { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/7 bg-card hover:border-accent/25 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white/85 font-medium text-base hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/85 font-medium text-base">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Follow me */}
            <div className="pt-4">
              <p className="text-sm uppercase tracking-widest text-muted font-bold mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-white/10 bg-card flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
