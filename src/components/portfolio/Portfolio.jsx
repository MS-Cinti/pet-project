import React from 'react'
import './portfolio.css'
import NASAIMG from '../../imagesAndFiles/nasa-project-img.png'
import PROFIMG from '../../imagesAndFiles/prof-editor-img.png'
import PETIMG from '../../imagesAndFiles/pet-pr-img.png' 

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={NASAIMG} alt="nasa-project-img" />
          </div>  
          <h3>Nasa Project</h3>
          <div className='portfolio-p'>
            <p>In this project, I am working with an open API and requesting data from the NASA API. A new image is uploaded to the APOD server every day. I created an input where you can see images from previous days.</p>
          </div>
          <div className="portfolio-item-cta">
            <a href="https://github.com/MS-Cinti/ask-nasa" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://ms-cinti.github.io/ask-nasa/" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={PROFIMG} alt="profimg" />
          </div>
          <h3>Profile Editor</h3>
          <div className='portfolio-p'>
            <p>This is a simple profile editor. In this project, I worked with and existing backend, used fetch API to handle forms.</p>
          </div>
          <div className="portfolio-item-cta">
            <a href="https://github.com/MS-Cinti/profile-editor" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={PETIMG} alt="portimg" />
          </div>
          <h3>Pet project with React app</h3>
          <div className='portfolio-p'>
            <p>Here you can see the code of this website.</p>
          </div>
          <div className="portfolio-item-cta">
            <a href="https://github.com/MS-Cinti/pet-project" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio