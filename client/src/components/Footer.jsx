import React from 'react';
import './NavBar.css';

const Footer = () => {
  return (
    <div id="footerBox" className="fadeIn">
      <a href="https://github.com/farahdotc" className="footerLink">
        <img
          src={require('../assets/github.png')}
          alt="logo"
          style={{ width: '39px', height: '39px' }}
        />
      </a>
      <a href="www.linkedin.com/in/farahcadet" className="footerLink">
        <img
          src={require('../assets/linkedin.png')}
          alt="logo"
          style={{ width: '39px', height: '39px' }}
        />
      </a>
    </div>
  );
};

export default Footer;
