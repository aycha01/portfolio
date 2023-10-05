import React from 'react'
import './about.css'
import{FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TbFolderPause} from 'react-icons/tb'
const About = () => {
  return (
    <section id='about' >
       <h5> Get to Konw</h5>
       <h2>About Me</h2>
       <div className='container about__container'>
        
       
       </div>


       <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward  className='about__icon'/>
            <h5> Experince</h5>
            <small> 1+ years working</small>
          </article>
          <article className='about__card'>
            <div className='about__icon'/>
            <h5> About Me</h5>
            <small> I am a university teacher and holder of a professional master's degree
         in network services and security. With a passion for learning and a in-depth 
         understanding of complex networks, my academic background allowed me
         to acquire in-depth knowledge in the field of cybersecurity.I aspire to further
         improve my expertise and contribute to the field by continuingto learn and obtain 
         a fulfilling job.</small>
          </article>

          <article className='about__card'>
            <FiUsers  className='about__icon'/>
            <h5> Projects</h5>
            <small> +3 </small>
          </article>

          


        

        </div>
        <br></br>
        

       </div>


    </section>
  )
}

export default About