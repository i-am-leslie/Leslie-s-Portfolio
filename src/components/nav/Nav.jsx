import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {MdConnectWithoutContact} from 'react-icons/md'
import {BsChatSquareQuoteFill} from'react-icons/bs'
import {useState} from 'react'
const nav = () => {
  
  return (
    <nav>
      <a href="#"><AiTwotoneHome/></a>
      <a href="#about"><FaUserTie/></a>
      <a href="#Experience"><MdWork/></a>
      <a href="#portfolio"><BsChatSquareQuoteFill/></a>
      <a href="#contact"><MdConnectWithoutContact/></a>



    </nav>
  )
}

export default nav