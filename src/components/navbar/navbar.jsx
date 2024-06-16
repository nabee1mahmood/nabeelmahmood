import React from 'react'
import './navbar.css'
 import logo from '../../assets/IMG_3500.jpg'
 import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <div className = 'navbar'>
      <img src={logo} alt='' style={{ width: '115px', height: 'auto' }} /> 
      <ul className ="nav-menu">
        
      <li><AnchorLink href="#home" className="anchor-link">Home</AnchorLink></li>
  <li><AnchorLink href="#about" className="anchor-link">About Me</AnchorLink></li>
  <li><AnchorLink href="#experience" className="anchor-link">Professional Experience</AnchorLink></li>
  <li><AnchorLink href="#contact" className="anchor-link">Contact</AnchorLink></li>
        </ul>
        <AnchorLink href="#contact" className="anchor-link">
  <div className="nav-connect">Connect With Me</div>
</AnchorLink>
    </div>
  )
}

export default Navbar
