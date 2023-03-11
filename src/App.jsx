import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import './App.css'

function App() {

  return (
    <div className='container' >
      <Navbar />
      <Hero />
      <Skills />
    </div>
  )
}

export default App
