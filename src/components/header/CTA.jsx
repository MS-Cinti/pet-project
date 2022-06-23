import React from 'react'
import CV from '../../imagesAndFiles/Cintia-Murai-Szabadi_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download CV</a>
    </div>
  )
}

export default CTA