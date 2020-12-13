import React from 'react';
import './WebDev.css';

const WebDev = () => {
  return (
    <div>
      <div id="webDevIntro">web dev projects</div>
      <div id="webDevProjBox">
        <a href="/projects#album">
          <div id="webDevMidterm"></div>
          <div id="descBoxAlbum">
            {' '}
            Albumology - A stunning visual display of all the albums by your
            favorite artists. A team collaboration.
          </div>
        </a>
        <a href="/projects#mind">
          <div id="webDevCurrent"></div>
          <div id="descBoxCurrent">
            {' '}
            Mind-Link - My current project. With an amazing design from the
            UX/UI team, implementing a pixel perfect site in progress.
          </div>
        </a>
        <a href="mailto: farahcadet@gmail.com">
          <div id="webDevFuture"></div>
          <div id="descBoxFuture">
            {' '}
            This space is reserved for my next pet project - what will it be?
            Message me with ideas and maybe we can collaborate!
          </div>
        </a>
      </div>
    </div>
  );
};

export default WebDev;
