import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FaHospitalUser} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {TbBrandPaypal} from 'react-icons/tb'
import {FaPhoneSquare} from 'react-icons/fa'


const nav = () => {
  
  return (
    <nav className='bob'>
      <a id='chucha1' href="#header" ><FcHome/></a>
      <a id='chucha' href="#about" ><FaHospitalUser/></a>
      <a id='chucha' href="#expirience" ><ImBooks/></a>
      <a id='chucha' href="#port" ><TbBrandPaypal/></a>
      <a id='chucha' href="#contact" ><FaPhoneSquare/></a>
    </nav>
  )
}

export default nav