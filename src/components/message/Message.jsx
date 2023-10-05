import React from 'react'
import './message.css'
import emailjs from 'emailjs-com';
import  { useRef } from 'react';

const Message = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tdgq48q', 'template_laelupe', form.current, 'MOeEzVTRV9DdHNQnv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

      };
  return (
<section id='message'>
    <h5> Get In touch </h5>
    <h2>Send Me a Message</h2>
    <div className='.container message__container'>
    <div className='subcontainer'>
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your Full Name' required/>
    <input type="email" name='email' placeholder='Your Email' required/>
    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
     <button type='submit' className='btn btn-primary'>Send Message</button>
</form></div>
</div>
</section>
  )
}

export default Message
