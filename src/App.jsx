import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import HeroIntro from './components/HeroIntro/HeroIntro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const themeMode = JSON.parse(localStorage.getItem('mode'))
  
    const [mode, setMode] = useState(themeMode || false)
     const [openNav, setOpenNav] = useState(false)
     useEffect(()=>{
      localStorage.setItem('mode', JSON.stringify(mode))
     }, [mode])
  return (
    <div className={`${mode ? 'bg-[#f6d4b1] text-[#1A1A1A]' : 'bg-[#1A1A1A] text-[#f6d4b1]'}`}>
      <Header mode={mode} setMode={setMode} openNav={openNav} setOpenNav={setOpenNav}/>
      <HeroIntro mode={mode}/>
      <About mode={mode}/>
      <Projects mode={mode}/>
      <Contact mode={mode}/>
      <Footer mode={mode}/>
    </div>
  )
}

export default App
