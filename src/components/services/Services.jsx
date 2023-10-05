import React from 'react'
import './services.css'
 import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
     <h5> What Skills I have</h5> 
     <h2>Skills</h2>

     <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3> Certifications</h3>
        </div>

        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> CCNA1 </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> CCNA2 </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> CCNA3 </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> CCNA4 </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> DataBase </p>
          </li>
          
        </ul>

      </article>
      {/* end of design */}

      <article className='service'>
        <div className='service__head'>
          <h3> Technical Skills</h3>
        </div>

        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> Programming language : C, C++, HTML, CSS, PHP, JSON, XML, SQL </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> DataBase : Oracle, MongoDB </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p>  
              Eclipse, Netbeans, AndroidStudio, 
              Wireshark, Cisco, PacketTracer, WindevDesktop, 
              Angular, SpringBoot </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p>Virtualization :  VM virtualbox, VMMare Workstation   </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p>Operating Systems:  Windows Server, Linux(Ubuntu, Fedora, Centos)   </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p>Security Systems Administartion:  GPG/PGP, OpenSSL, Acl</p>
          </li>
          
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p>Containerization:  Docker-Compose, Ansible   </p>
          </li>
          
          
        </ul>

      </article>
      {/* end of web developement */}
      <article className='service'>
        <div className='service__head'>
          <h3> Langauage</h3>
        </div>

        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> French</p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> english </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> Arabic </p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon' /> 
            <p> Associative life : member at the info night organized by "ISITCOM"</p>
          </li>
         
        </ul>

      </article>
      {/* end of content creation  */}
     </div>
    </section>
  )
}

export default Services