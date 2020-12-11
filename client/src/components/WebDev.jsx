import React from 'react';
import './WebDev.css';

const WebDev = () => {
  return (
    <div>
      <div id="webDevIntro">web dev projects</div>
      <div id="webDevProjBox">
        <a href="https://albumology.herokuapp.com/">
          <div id="webDevMidterm"></div>
          <div id="descBoxAlbum">
            {' '}
            Albumology - A stunning visual display of all the albums by your
            favorite artists. A team collaboration.
          </div>
        </a>
        <a href="/">
          <div id="webDevCurrent"></div>
          <div id="descBoxCurrent">
            {' '}
            My current in progress pet project - stay tuned for Mind-Link
          </div>
        </a>
        <a href="mailto: farahcadet@gmail.com">
          <div id="webDevFuture"></div>
          <div id="descBoxFuture">
            {' '}
            This space is reserved for my next pet project - what will it be?
            Click here to message me with suggestions
          </div>
        </a>
      </div>
    </div>
  );
};

export default WebDev;
