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
        <div className="gifBox">
          <img
            className="imgScale"
            src={require('../Projects/rbuni.png')}
            alt="RBranson"
          />
        </div>
        <div className="blurbBox">
          {' '}
          <p>Project Brief</p>
          <p>
            When you say your crew are the most important people to you then you
            back that up with an industry first, fashion forward, comfortable,
            make you wanna wear it even when you're not at work type of uniform.
          </p>
          <p>
            As the design lead for the business, I guided the awarded designer
            on the vibe and aesthetics of each space and represented the
            business' needs. This project also included promo photoshoots,
            London Fashion Week party, style guide for crew and uniform
            installation.{' '}
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

export default Uniform;
