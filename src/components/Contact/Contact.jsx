import React, {useRef} from 'react'
import './contact.css'

import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_thz7nln', 'template_c7t0vel', form.current, '93lut7veqZCH4Gc0o')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kevinsaezramirez@gmail.com</h5>
            <a href="mailto:kevinsaezramirez@gmail.com">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+56942443069</h5>
            <a href="https://api.whatsapp.com/send?phone=+56942443069" rel='noreferrer' target='_blank'>Send a Message</a>
          </article>

        </div>
        {/* End of the contact buttons section */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Your full name' name='name' required />
          <input type='email' placeholder='Your email' name='email' required />
          <textarea name='message' rows='7' placeholder='Your message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {/* End of the form section */}
      </div>
    </section>
  )
}

export default Contact