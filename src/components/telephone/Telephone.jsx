import React from 'react'
import './telephone.css'
import {AiOutlineMail} from 'react-icons/ai'
import {LiaFacebookMessenger} from 'react-icons/lia'
import {AiOutlineWhatsApp} from 'react-icons/ai'



const Telephone = () => {
    
  return (
   <section id='telephone'>
    <h5> Get In touch </h5>
    <h2>Contact Me</h2>

    <div className='.container contact__container'>
        <div className='subcontainer'>
        <div className='contact__options'>
            <article className='contact__option'>
                <AiOutlineMail  className='contact__option-icon'/>
             <h4>Email</h4>
             <h5> amri.aicha26@gmail.com</h5>
             <a href='mailto:amri.aicha26@gmail.com' target='__blank'>Send a message </a>
            </article>
            <article className='contact__option'>
                <LiaFacebookMessenger className='contact__option-icon'/>
             <h4>Messenger</h4>
             <h5> aysha amri</h5>
             <a href='https://m.me/aysha.amri.1'target='__blank'>Send a message </a>
            </article>
            <article className='contact__option'>
                <AiOutlineWhatsApp className='contact__option-icon'  />
             <h4>WhatsApp</h4>
             <h5> +216 23353892</h5>
             <a href='https://api.whatsapp.com/send?phone+21623353892' target='__blank'>Send a message </a>
            </article>
        </div></div>
        <br></br>
        {/* end of contact of option*/}
   
    </div>

   </section>
  )
}

export default Telephone