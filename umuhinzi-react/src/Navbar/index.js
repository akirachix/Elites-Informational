import React, { useState } from 'react';
import './index.css';
import umuhinzi_logo from '../Images/umuhinzi_logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navs'>
      <div className='logo_navbar'>
        <div>
          <img className='logo' src={umuhinzi_logo} alt='umuhinzi_logo' />
        </div>
        <div className='navbar'>
          <Link to='home-section' smooth={true} duration={500}>Home</Link>
          <Link to='about' smooth={true} duration={500}>About</Link>
          <Link to='mission-section' smooth={true} duration={500}>Mission</Link>
          <Link to='vision-section' smooth={true} duration={500}>Vision</Link>
          <Link to='products-section' smooth={true} duration={500}>Products</Link>
          <Link to='team-container' smooth={true} duration={500}>Team</Link>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>

      {showMenu && (
        <div className='menu'>
          <Link to='home-section' smooth={true} duration={500}>Home</Link>
          <Link to='about' smooth={true} duration={500}>About Us</Link>
          <Link to='mission-section' smooth={true} duration={500}>Mission</Link>
          <Link to='vision-section' smooth={true} duration={500}>Vision</Link>
          <Link to='products-section' smooth={true} duration={500}>Products</Link>
          <Link to='team-container' smooth={true} duration={500}>Team</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
