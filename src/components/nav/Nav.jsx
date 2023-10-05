import React from 'react'
import    './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (

<nav>  
  <a href="#" onClick={() => setActiveNav('#')}
  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
  <a href="#about"  onClick={() => setActiveNav('#about')}  className={activeNav === '#' ? 'active' : ''}><AiOutlineUser/></a>
  <a href="#experiences"  onClick={() => setActiveNav('#experiences')}
  className={activeNav === '#' ? 'active' : ''}><BiBook/></a>
  <a href="#services"  onClick={() => setActiveNav('#services')}
  className={activeNav === '#' ? 'active' : ''}><RiServiceLine/></a>
  <a href="#telephone"  onClick={() => setActiveNav('#telephone')}
  className={activeNav === '#' ? 'active' : ''}><BiMessageRoundedDetail/></a>
  <a href="#message"  onClick={() => setActiveNav('#message')}
  className={activeNav === '#' ? 'active' : ''}><AiOutlineMessage/></a>

</nav>
  )
}

export default Nav