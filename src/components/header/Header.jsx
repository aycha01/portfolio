import React from 'react'
import   './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Aicha Amri</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <br></br>
        
        
        <a href="#telephone" className='scroll__down'></a>
      </div>
    </header>
  )
}

export default Header