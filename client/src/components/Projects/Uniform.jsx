import React from 'react';
import './Projects.css';

const Uniform = () => {
  return (
    <div>
      <h1 className="projectTitle" id="uniform">
        Ship Chic
      </h1>
      <div className="projectContainer">
        <div className="imgBox">
          <img
            className="imgScale"
            src={require('../Projects/uniform.png')}
            alt="Ship"
          />
        </div>
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

export default Uniform;
