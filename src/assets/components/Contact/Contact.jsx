import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import  {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ne8dxr', 'template_sw73bxb', form.current, 'Wv8x1PzDI--po5aEP')
      e.target.reset()
  };
  
  return (
    <section id='contact'>
    <h5 id='pipa'>Get In Touch</h5>
    <h2 id='pipa'>Contact Me</h2>
    <div className="contact_container">
      <div className="contact_options">

      <article className='contact_option'>
        <SiGmail/>
        <h4>E-mail</h4>
        <h5>syedfaiyazhussaini06@gmail.com</h5>        
        <a  href="mailto:syedfaiyazhussaini06@gmail.com">Send a messege</a>      
      </article>
      <article className='contact_option'>
        <BsWhatsapp className='wts'/>
        <h4>Whats-app</h4>
        <h5 id='hd'>+918867924764</h5>        
        <a  href="https://wa.me/918867924764"> <button id='wtm'>Whats-App Me</button> </a>      
      </article>
          
      
      </div>
      {/*End of options*/}
     <form action="" className='form' ref={form} onSubmit={sendEmail}>

        <input type="text" name='name' placeholder=' Your Full Name' required />
        <input className='i2' type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
        <button type='Submit' id='su'className='su'>Submit</button>
     </form>
      
    </div>
    </section>
  )
}

export default Contact