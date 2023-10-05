import React from 'react'
import  './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AICHA</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>Experiences</a></li>
        <li><a href='#services'>Skills</a></li>
        <li><a href='#telephone'>Contact</a></li>
        <li><a href='#message'>Message</a></li>

      </ul>
      <div className='footer__socials'>
        <a href='https://m.me/aysha.amri.1'target='__blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/'  target='__blank'><BsInstagram /></a>
        <a href='https://twitter.com/?lang=fr' target='__blank'><FiTwitter /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Aicha Amri.All rights reserves.</small>
      </div>
    </footer>
  )
}

export default Footer