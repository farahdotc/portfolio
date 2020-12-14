import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="navBox" className="fadeIn">
      <a href="/" className="navLink">
        Home
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
        <img
          src={require('../assets/dm.png')}
          alt="logo"
          style={{ width: '25px', height: '17px' }}
        />
      </a>
    </div>
  );
};

export default NavBar;
