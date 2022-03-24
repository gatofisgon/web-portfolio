import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/Simon-Game-Preview.png'
import IMG2 from '../../assets/GIF-Api-Showdown.png'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Gif Fetcher',
    github: 'https://github.com/gatofisgon/gif-fetcher',
    demo: 'https://gatofisgon.github.io/gif-fetcher/',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Simon Game',
    github: 'https://github.com/gatofisgon/SimonGame',
    demo: 'https://gatofisgon.github.io/SimonGame/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({id, image, title, github, demo}) => {
          return (
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt='' />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} rel='noreferrer' target='_blank' className='btn'>Github</a>
            <a href={demo} rel='noreferrer' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        )
        })}
        
      </div>

    </section>
  )
}

export default Portfolio