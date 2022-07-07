import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer className='foot'>
      <a href="" className='footer_logo'></a>

        <h1 id='faiz'>FAIZ</h1>
      <ul className='permalinks'>
        <li><a id='pai' href="#header">Home</a></li>
        <li><a id='pai' href="#about">About</a></li>
        <li><a id='pai' href="#expirience">Experience</a></li>
        <li><a id='pai' href="#port">Projects</a></li>
        <li><a id='pai' href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://facebook.com" ><ImFacebook2/></a>
        <a href="https://www.instagram.com/ifaiz_hussaini/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/syed-faiyaz-hussaini-54840823b"><BsLinkedin/></a>
      </div>
    </footer>
  )
}

export default footer