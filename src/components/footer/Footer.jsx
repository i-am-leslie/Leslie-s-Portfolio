import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer id='Project'>
     <a className='footer__logo' href="#">EJEH</a>
     <ul className='permalinks'>
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#Experience">Experience</a></li>
       <li><a href="#contact">Contact</a></li>
       <li><a href="#portfolio">Quotes</a></li>

     </ul>
     <div className="footer__copyright" >
       <small>&copy; LESLIE Website.All right reserved</small>

     </div>

    </footer>
  )
}

export default Footer