import '../styles/style.css'
import useMainEffects from '../hooks/useMainEffects.js'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Journey from '../components/Journey.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'

export default function Home() {
  useMainEffects();

  return (
    <div className="portfolio-page">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
