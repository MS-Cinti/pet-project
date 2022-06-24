import React from 'react'
import './about.css'
import ME from '../../imagesAndFiles/me2.jpg'

const About = () => {
  return (
    <section id='about'>      

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={ME} alt="me2" />
          </div>
        </div>

        <div className='about-content'>
          <h2>About me</h2>
          <p>I graduated as a teacher but after a couple of years, I decided to change my career. I completed Codecool's program this year, where I became an enthusiastic and motivated Front-end developer. 
          Now, I see my future in web-development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About