import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Education from './Sections/Education'
import './index.css'

function App() {

  // Back on home page when refresh the page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Explicitly set the hash to #home on initial mount so refresh navigates to home
      // Replace state so we don't add an extra history entry
      const targetHash = '#home';
      window.history.replaceState(null, '', window.location.pathname + window.location.search + targetHash);

      // Smooth scroll to the `#home` element (if present) or to top
      const el = document.getElementById('home');
      if (el) {
        // Use a small timeout to allow the browser to finish initial layout
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      } else {
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 50);

      }
    }
  }, []);


  return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Education /> 
    <Contact />
  </div>
  )
}

export default App
