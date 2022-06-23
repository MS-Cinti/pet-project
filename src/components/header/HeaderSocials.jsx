import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"> <BsLinkedin size={22}/> </a>
        <a href="https://github.com" target="_blank" rel="noreferrer"> <FaGithub size={22}/> </a>
    </div>
  )
}

export default HeaderSocials