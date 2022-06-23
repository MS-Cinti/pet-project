import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={ () => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={ () => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}> <BiUser /> </a>
      <a href="#portfolio" onClick={ () => setActiveNav('#portfolio') } className={activeNav === '#portfolio' ? 'active' : ''}> <BsBriefcase /> </a>
      <a href="#contact" onClick={ () => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}> <AiOutlinePhone /> </a>
    </nav>
  )
}

export default Navbar