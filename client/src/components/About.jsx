import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <h1 className="pageTitle">about me</h1>

      <div className="aboutText">
        <div id="mainAbout">
          i'm thrilled that you want to know more about me!
        </div>
        <div id="moreAbout">
          (my professional background is pretty interesting and I can't wait to
          share it.)
        </div>
        <div id="checkAbout">check back soon for my story...</div>
      </div>
    </div>
  );
};

export default About;
