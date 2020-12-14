import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="navBox" className="fadeIn">
      <a href="/" className="navLink">
        Home
        {/* <img
          src={require('../assets/headphonesbackground.png')}
          alt="logo"
          style={{ width: '29px', height: '29px' }}
        /> */}
      </a>
      <a href="/projects" className="navLink">
        Projects
      </a>
      <a href="/resume" className="navLink">
        Resume
      </a>
      <a href="/about" className="navLink">
        About Me
      </a>
      <a href="mailto: farahcadet@gmail.com" className="navLink">
        Contact
      </a>
    </div>
  );
};

export default NavBar;
