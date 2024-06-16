import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Services from './components/services/services'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
