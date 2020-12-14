import React from 'react';
import './Projects.css';

const Soy = () => {
  return (
    <div>
      <h1 className="projectTitle" id="soy">
        Sushi in Negril
      </h1>
      <div className="projectContainer">
        <div className="imgBox">
          <img
            className="imgScale"
            src={require('../Projects/soy.png')}
            alt="Soy"
          />
        </div>
        <div className="gifBox">
          <img
            className="imgScale"
            src={require('../Projects/soyext.png')}
            alt="SoyExt"
          />
        </div>
        <div className="blurbBox">
          {' '}
          <p>Project Brief</p>
          <p>When you think of sushi lovers do you think of kids?</p>
          <p></p>
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

export default Soy;
