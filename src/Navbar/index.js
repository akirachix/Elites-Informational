
import React, { useState } from 'react';
import './index.css';
import umuhinzi_logo from '../Images/umuhinzi_logo.png';

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
          <li>Home</li>
          <li>About</li>
          <li>Mission</li>
          <li>Vision</li>
          <li>Products</li>
          <li>Team</li>
        </div>
         <div className='hamburger' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div> 
      </div>

      {showMenu && (
        <div className='menu'>
          <li>Home</li>
          <li>About Us</li>
          <li>Mission</li>
          <li>Vision</li>
          <li>Products</li>
          <li>Our team</li>
        </div>
      )}
    </div>
  );
};

export default Navbar;

