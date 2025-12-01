import React, { useEffect, Suspense } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Education from './Sections/Education'
import './index.css'


// Lazy-load SkillsMarquee
const SkillsMarquee = React.lazy(() => import("./Sections/Skills/Skills"));


function App() {

  // Back on top to navbar when refresh the page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Scroll to navbar on initial mount so refresh navigates to the top
      const targetHash = '';
      window.history.replaceState(null, '', window.location.pathname + window.location.search + targetHash);

      // Smooth scroll to the top (navbar area)
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 50);
    }
  }, []);


  return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
     {/* Lazy-loaded SkillsMarquee */}
      <Suspense fallback={<div className="text-center py-12">Loading Skills...</div>}>
        <SkillsMarquee />
      </Suspense>
    <Education /> 
    <Contact />
  </div>
  )
}

export default App
