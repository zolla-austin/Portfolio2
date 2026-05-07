import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
