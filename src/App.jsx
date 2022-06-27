import React from 'react'
import Header from './assets/components/header/header'
import Nav from './assets/components/nav/nav'
import About from './assets/components/about/about'
import Experience from './assets/components/expirience/expirience'

import Portfolio from './assets/components/portfolio/portfolio'

import Contact from './assets/components/Contact/Contact'
import Footer from './assets/components/footer/footer'



const App = () => {
  return (
    <>
    < Header />
    <Nav/>
    <About/>
    <Experience/>
   
    <Portfolio/>
    <Contact/>
    <Footer/>
    
    
    </>
  )
}

export default App