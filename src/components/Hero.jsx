import { motion } from 'framer-motion'
import { MapPin, ArrowDown, Download } from 'lucide-react'
import profilePhoto from '../assets/profile.jpeg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-teal/8 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Identity & Bio */}
          <div>
            {/* Location badge */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-7">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/4 text-sm text-muted font-medium tracking-widest uppercase">
                <MapPin size={11} className="text-teal" />
                Based in Lagos, Nigeria
              </span>
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm text-muted">Open to work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.18)}
              className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-none tracking-tighter mb-4"
            >
              Zolla
              <br />
              <span className="relative">
                Austine
                {/* Decorative underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 8"
                >
                  <path
                    d="M0 6 Q50 1 100 5 Q150 9 200 3"
                    fill="none"
                    stroke="#6c63ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div {...fadeUp(0.26)} className="mt-5 mb-6">
              <span className="font-display font-bold text-2xl text-accent/90 tracking-tight">
                Front-End Developer
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-muted text-base leading-relaxed max-w-lg mb-10 font-light"
            >
              I build modern, responsive, and high-performance web applications that deliver
              seamless user experiences. With expertise in{' '}
              <span className="text-white/80 font-medium">HTML, CSS, JavaScript, and React</span>,
              I focus on creating clean, scalable, and visually engaging interfaces.
            </motion.p>

            {/* CTA Button */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent hover:bg-accent/85 text-white font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-accent/25"
              >
                ✦ Hire Me
              </button>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/30 via-transparent to-teal/20 blur-2xl scale-110 animate-glow-pulse" />

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-teal rounded-br-lg" />

              {/* Photo frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                {/* Inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-teal/10 z-10 pointer-events-none" />

                {/* Photo */}
                <img
                  src={profilePhoto}
                  alt="Zolla Austine – Front-End Developer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback placeholder if photo not found
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('photo-fallback')
                  }}
                />

                {/* Fallback if no image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface to-card opacity-0 photo-fallback:opacity-100 transition-opacity">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                    <span className="font-display font-black text-3xl text-accent">ZA</span>
                  </div>
                  <span className="text-muted text-sm">Add your photo as</span>
                  <code className="text-accent text-xs mt-1">public/my-photo.jpg</code>
                </div>
              </div>

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 bg-card border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm"
              >
                <div className="text-xs text-muted mb-0.5 font-medium">Primary Stack</div>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold text-sm">React</span>
                  <span className="text-white/20">+</span>
                  <span className="text-teal font-bold text-sm">Tailwind</span>
                </div>
              </motion.div>

              {/* Floating availability badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-6 bottom-1/4 bg-card border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span className="text-xs font-semibold text-white/80">Available Now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-muted hover:text-white transition-colors group"
          >
            <span className="text-sm tracking-widest uppercase font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} className="group-hover:text-accent transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
