import React from 'react'
import document from '../../../assets/Document.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a  href={document} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Wanna Talk?</a>
        </div>
  )
}

export default Cta
