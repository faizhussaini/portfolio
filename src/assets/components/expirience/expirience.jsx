import React from 'react'
import './expirience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='expirience'>
      <h5>What Skills Do i Have</h5>
      <h2>My Experience</h2>
      <div className="experience_container">

        <div >
        <h3 id='fd'>FRONTEND DEVELOPMENT</h3>

        <div className='skills'>
        <article className='experience_details'>
        <BsFillPatchCheckFill className='tick'/>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsFillPatchCheckFill className='tick'/>
        <h4>CSS</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='tick'/>
        <h4>JavaScript</h4>
        <small className='text-light'>Intermediate</small>
        </article>
        <article className='experience_details'>
        <BsFillPatchCheckFill className='tick'/>
        <h4>React</h4>
        <small className='text-light'>Experienced</small>
        </article>
        <article className='experience_details'>
        <BsFillPatchCheckFill className='tick'/>
        <h4>Bootstrap</h4>
        <small className='text-light'>Experienced</small>
        </article>
        </div>
        </div>

      </div>
      </section>
  )
}

export default Experience