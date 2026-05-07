import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const traits = [
  { icon: Code2, label: 'Clean Code', desc: 'Well-structured, maintainable, and scalable codebases.' },
  { icon: Palette, label: 'Pixel Perfect', desc: 'Faithful implementation of every design detail.' },
  { icon: Zap, label: 'Performance First', desc: 'Optimized for speed, lighthouse scores, and UX.' },
  { icon: Users, label: 'User-Centric', desc: 'Interfaces built around real human interactions.' },
]

const stack = [
  'HTML5', 'CSS3 / SCSS', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Tailwind CSS', 'Framer Motion',
  'Git & GitHub', 'Figma', 'REST APIs', 'Node.js',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle ambient */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">// About Me</span>
          <h2 className="font-display font-black text-4xl md:text-5xl xl:text-6xl tracking-tighter mt-3 leading-none">
            Building interfaces<br />
            <span className="text-muted font-light italic">that last.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-white/60 text-lg leading-relaxed font-light mb-6">
              I'm <strong className="text-white font-semibold">Zolla Austine</strong>, a Front-End Developer
              based in Lagos, Nigeria who specialises in building{' '}
              <strong className="text-white font-semibold">user-friendly, high-performance</strong> web
              interfaces. I believe great front-end work lives at the intersection of engineering rigour
              and design sensibility.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light mb-10">
              My focus is on writing{' '}
              <span className="text-accent font-medium">well-structured, scalable code</span> that not
              only looks stunning but performs excellently under real-world conditions. Whether it's a
              landing page, a SaaS dashboard, or a full e-commerce platform — I bring the same obsessive
              attention to detail to every project.
            </p>

            {/* Trait cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {traits.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="group p-4 rounded-2xl border border-white/7 bg-card hover:border-accent/30 hover:bg-surface transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <span className="font-display font-bold text-sm">{label}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-3xl border border-white/8 bg-card p-8 relative overflow-hidden">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-rose" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-teal" />
                <span className="ml-2 text-xs text-muted font-mono tracking-wider">tech-stack.js</span>
              </div>

              <p className="text-muted text-xs font-mono mb-4">// Technologies I work with daily</p>

              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                    className="px-3 py-1.5 rounded-lg border border-white/8 bg-bg text-white/70 text-xs font-medium hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Bottom quote */}
              <div className="mt-8 pt-6 border-t border-white/7">
                <p className="text-sm text-muted italic leading-relaxed">
                  "Code is poetry when it's clean, purposeful,
                  and built with the end-user in mind."
                </p>
                <span className="text-xs text-accent font-medium mt-2 block">— Zolla Austine</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
