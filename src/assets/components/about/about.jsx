import React from 'react'
import './about.css'
import me from '../../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUserSecret} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'


const about = () => {
  return (
    <section id='about'>
      <h5>Wanna Know </h5>
      <h2>About Me</h2>

      <div className="container about_container"
      >
        <div className="about_me">
          <div className="about_image">
            <img src={me} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='abouticon'/>
              <h5>Expirience</h5>
              <small>1 year Working</small>
            </article>
            <article className='about_card'>
              <FaLaptopCode className='abouticon'/>
              <h5>Projects</h5>
              <small>#3</small>
            </article>
            <article className='about_card'>
              <FaUserSecret className='abouticon'/>
              <h5>Clients</h5>
              <small>15</small>
            </article>
          </div>
          <p>
            I provide Shape to Imagination , am a dedicated and very curios Front End Developer. I always like to Push the Limits, 
            and Collaborate with Teams And build Responsive Designs and Layouts. 
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about