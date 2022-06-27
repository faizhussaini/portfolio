import React from 'react'
import './header.css'
import Cta from './Cta'
import me from '../../../assets/me.jpeg'
import Headersocial from './Headersocial'


const header = () => {
  return (
   <header id='header'>
    <div className="container header_container" >
      <h5>H! I'm </h5>
      <h1 id='syh'>Syed Faiyaz Hussaini</h1>
      <h5 className="text-light">Front-End Developer</h5>
      <Cta/>
      <Headersocial/>
      <div className="me">
        <img src={me} alt="me" />

      </div>
      <a href="#contact" className='scroll_down'>scroll down</a>
    </div>
   </header>
  )
}

export default header