import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="header_container">
      <h5 > Hello I'm</h5>
      <h1>Leslie Ejeh</h1>
      <h5 className="text-light" >Student, Programmer, Gamer</h5>
      <CTA/>
      <HeaderSocial/>
      </div>

      <div className='me' >
        <img src={ME} alt="me"/>
      </div>

      <a href="#contact" className='scroll_down' >Scroll down</a>
    </header>
  )
}

export default header