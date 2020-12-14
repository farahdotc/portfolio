import React from 'react';
import './Projects.css';

const TeaTray = () => {
  return (
    <div>
      <h1 className="projectTitle" id="tea">
        High Tea on the high seas
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
          {/* <p>Coming soon</p>
          <p>Coming soon</p> */}
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
