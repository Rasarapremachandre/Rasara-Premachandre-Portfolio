import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { MdPhone } from 'react-icons/md'; 

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* Logo / Name */}
      <div className='navLogo'>
        RASARA...
      </div>

      {/* Nav Links */}
      <div className='navItems'>
        <Link to="intro" smooth={true} duration={500} className="navItem" spy={true} activeClass="active">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="navItem" spy={true} activeClass="active">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="navItem" spy={true} activeClass="active">
          Projects
        </Link>
        <Link to="certificates" smooth={true} duration={500} className="navItem" spy={true} activeClass="active">
          Certificate
        </Link>
      </div>

      {/* Contact Button */}
      <Link to="contact" smooth={true} duration={500}>
        <button className='navItemsBtn'>
          <MdPhone style={{ marginRight: '8px' }} />
          Contact Me
        </button>
      </Link>
    </nav>
  )
}

export default Navbar;
