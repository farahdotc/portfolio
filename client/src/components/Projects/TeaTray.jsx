import React from 'react';
import './Projects.css';

const TeaTray = () => {
  return (
    <div>
      <h1 className="projectTitle" id="tea">
        High Tea on the high seas
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
              src={require('../Projects/teatray.png')}
              alt="MindLink"
            />
          </div>
        </a>
        <div className="gifBox"></div>
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
