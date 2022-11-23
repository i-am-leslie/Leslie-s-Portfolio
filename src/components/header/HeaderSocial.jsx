import React from 'react'
import {BsLinkedin} from  'react-icons/bs'
import {SiGmail} from  'react-icons/si'

const headersocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/feed/" target="_blank">< BsLinkedin /></a>
        <a href="mailto:ejehboss@gmail.com" target="_blank">< SiGmail/> </a>
    </div>
  )
}

export default headersocial