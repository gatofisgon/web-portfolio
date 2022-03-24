import React from 'react'
import './about.css'
import {BsAwardFill} from 'react-icons/bs' 
import {BsFolderFill} from 'react-icons/bs'

import ME from '../../assets/hoverImage.png'

const About = () => {
  return (
    <section id='about' className='container'>
      <h5>Some Things</h5>
      <h2>About Me</h2>

      <div className=' about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Me'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>+1 years of experience</small>
            </article>
            <article className='about__card'>
              <BsFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>+5 Projects</small>
            </article>
          </div>
          <p>My name is Kevin Saez. <hr/>
          I'm a self-taught web developer. I've been passionate about web development since I knew about it 
            at my university for a project, when I was part of the students council. Since then all I've been doing is 
            learning about it, starting with Html & Css in 2019, then learning Bootstrap, jQuery, DOM 
            concepts, and now reactJs and web design. <hr/>
            I also love videogames like Stardew Valley and hanging out with friends once in a while.
          </p>
        <a className='btn btn-primary' href='#contact'>Let's Talk</a>
        </div>
      </div>

      

      
      
      </section>
  )
}

export default About