import React, { useState } from 'react'
import './navbar.css'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsFileCode} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a onClick={() => {setActiveNav('#')}} className={activeNav === '#' && 'active'} href='#header'><AiOutlineHome /></a>
      <a onClick={() => {setActiveNav('#about')}} className={activeNav === '#about' && 'active'} href='#about'><AiOutlineUser /></a>
      <a onClick={() => {setActiveNav('#experience')}} className={activeNav === '#experience' && 'active'} href='#experience'><BiBook /></a>
      <a onClick={() => {setActiveNav('#portfolio')}} className={activeNav === '#portfolio' && 'active'} href='#portfolio'><BsFileCode /></a>
      <a onClick={() => {setActiveNav('#contact')}} className={activeNav === '#contact' && 'active'} href='#contact'><AiOutlineMessage /></a>
    </nav>
  )
}

export default Navbar