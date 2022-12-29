import React from 'react'
import {BsLinkedin} from  'react-icons/bs'
import {SiGmail} from  'react-icons/si'
import {BsGithub} from 'react-icons/bs'
const headersocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/feed/" target="_blank">< BsLinkedin /></a>
        <a href="mailto:ejehboss@gmail.com" target="_blank">< SiGmail/> </a>
        <a href="https://github.com/i-am-leslie?tab=repositories" target="_blank">< BsGithub/> </a>
    </div>
  )
}

export default headersocial