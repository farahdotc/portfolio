import React from 'react';
import './Projects.css';

const Mindlink = () => {
  return (
    <div>
      <h1 className="projectTitle" id="mind">
        Mind-Link
      </h1>
      <div className="projectContainer">
        <a
          className="imgBox"
          href="https://albumology.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="imgBox">
            <img
              className="imgScale"
              src={require('../Projects/mindlink.png')}
              alt="MindLink"
            />
          </div>
        </a>
        <div className="gifBox"></div>
        <div className="blurbBox">
          {' '}
          <p>Project Brief</p>
          {/* <p>

          </p>
          <p>
 
          </p> */}
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

export default Mindlink;
