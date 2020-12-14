import React from 'react';
import './Projects.css';

const TeaTray = () => {
  return (
    <div>
      <h1 className="projectTitle" id="tea">
        High tea on the high seas
      </h1>
      <div className="projectContainer">
        <div className="imgBox">
          <img
            className="imgScale"
            src={require('../Projects/teatray.png')}
            alt="MindLink"
          />
        </div>
        <div className="gifBox">
          <img
            className="imgScale"
            src={require('../Projects/sip2.png')}
            alt="sip"
          />
        </div>
        <div className="blurbBox">
          {' '}
          <p>Project Brief</p>
          <p>
            How can tea time be elevated into an experience? As the design
            manager for all tabletop items this fell into my remit to solve. The
            answer not surprisingly, is very simply with an amazing team that
            works with other amazing teams.
          </p>
          <p>
            This project took collaboration across the business and externally
            all while on an urgent timeline. The resulting product is a sexy
            instagramable moment created for the customer and satifies the
            business' goals.
          </p>
        </div>

        <div className="roleBox">
          {/* <p>My major roles on this project:</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default TeaTray;
