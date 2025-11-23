import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Components/Footer'
import Education from './Sections/Education'
import './index.css'

function App() {


  return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Education />
    <Contact />
    <Footer />
  </div>
  )
}

export default App
