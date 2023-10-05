 import React from 'react'
 import CV from '../../assets/CV-aicha-amri-1.pdf'
 
 const CTA = () => {
   return (
     <div className='cta'>
          <a href={CV} download className='btn'> Download CV</a>
          <a href="#telephone" className='btn btn-primary'>Let's talk</a>
     </div>
   )
 }
 
 export default CTA