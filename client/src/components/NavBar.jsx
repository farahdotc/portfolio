import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="navBox" className="fadeIn">
      <a href="/about" className="navLink">
        about me
      </a>
      <a href="/" className="navLink">
        projects
      </a>
      <a href="/resume" className="navLink">
        resume
      </a>
      <a href="mailto: farahcadet@gmail.com" className="navLink">
        contact
      </a>
    </div>
  );
};

export default NavBar;
