import React from 'react'
import './footer.css'

import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <h2 className='footer__logo'>KEVIN SAEZ_</h2>
      <small>Web Developer</small>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/JosukeBestJojo"><BsFacebook /></a>
        <a href="https://www.instagram.com/gato_fisgon/"><BsInstagram /></a>
        <a href="https://twitter.com/invernal_kev"><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; KevWebDeveloper 2022</small>
      </div>
    </footer>
  )
}

export default Footer