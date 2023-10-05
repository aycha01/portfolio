import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi' 
const Experience = () => {
  return (
    <section id='experiences'>
      <h2> My Experiences </h2>
      <div className="container experience__container">
        <div className='experience__frontend'>
          {/* <h3> frontend Development</h3>*/}
          <div className="experience__content">
          <article className='experience__details'>
              <HiBadgeCheck  className='experience__details-icon'/>
              <div>
              <h4> ISITCOM : university professor (Machine Learning)</h4>
              <small className='text-light'>Oct 2022 - Jan 2023 Sousse, Tunisie </small>
              </div>
            </article>
            

          

            <article className='experience__details'>
              <HiBadgeCheck  className='experience__details-icon'/>
              <div>
              <h4> IMSET : university professor  </h4>
              <small className='text-light'>Oct 2022– dec 2023  Sousse, Tunisie  </small>
              </div>
            </article>
           
           </div>

        </div>
        { /*end of frontend */}

        <div className="experience__backend">
        {/* <h3> Backend Development</h3> */}
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck  className='experience__details-icon'/>
              <div>
              <h4> Educanet sousse : Intership</h4>
              <small className='text-light'>Février 2022- Mai 2022 Sousse, Tunisie </small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4> Tunisie Telecom : Intership</h4>
              <small className='text-light'>Février 2020- Juin 2020 Sousse, Tunisie </small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
              <h4> Leoni Messaadine  : Intership</h4>
              <small className='text-light'> 01-Juin-2019  30-Juin- 2019 Sousse, Tunisie  </small>
              </div>
            </article>

           
            
          </div>


        </div>
      </div>
    </section>
  )
}

export default Experience