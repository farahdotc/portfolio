import React from 'react';
import './Albumology.css';

const Albumology = () => {
  return (
    <div>
      <div className="upperBox">
        <a
          href="https://albumology.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="imgBox"></div>
        </a>
        <div className="sideBox">
          <div className="gifBox"></div>
          <div className="blurbBox">
            {' '}
            <p>Project Brief</p>
            <p>
              Teamed up into a group of four, my peers and I were charged with
              creating an app that solved a unique problem using REACT, API's,
              CSS, Express and JavaScript.
            </p>
            <p>
              From that we bring you ALBUMOLOGY - A stunning visual display of
              all the albums by your favorite artists. Take a journey through
              your life narrarated by the music you've loved!
            </p>
          </div>
        </div>
      </div>
      <div className="roleBox">
        <p>My major roles on this project:</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Albumology;
