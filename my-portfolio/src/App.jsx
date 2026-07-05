import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certification from './components/Certification'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certification />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;