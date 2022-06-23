import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
        <h2>Contact with me or check my other projects</h2>
        <div className='container contact-container'>
            <div className='contact-items'>
                <article className='contact-item'>
                    <AiOutlineMail className='contact-item-icon'/>
                    <h4>Email</h4>
                    <h5>szabadicintia@gmail.com</h5>
                    <a href="mailto:szabadicintia@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                </article>

                <article className='contact-item'>
                    <FaFacebookMessenger className='contact-item-icon'/>
                    <h4>Messenger</h4>
                    <h5>Cintia Murai-Szabadi</h5>
                    <a href="https://m.me/sz.cini" target="_blank" rel="noreferrer">Send a message</a>
                </article>

                <article className='contact-item'>
                    <BsLinkedin className='contact-item-icon'/>
                    <h4>Linkedin</h4>
                    <h5>Cintia Murai-Szabadi</h5>
                    <a href="https://linkedin.com/in/cintia-murai-szabadi-724a4023b" target="_blank" rel="noreferrer">Send a message</a>
                </article>
                
                <article className='contact-item'>
                    <FaGithub className='contact-item-icon'/>
                    <h4>Github</h4>
                    <h5>MS-Cinti</h5>
                    <a href="https://github.com/MS-Cinti" target="_blank" rel="noreferrer">Check my other projects</a>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Contact