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
        <div className="gifBox">
          <img
            className="imgScale"
            src={require('../Projects/mindlog.png')}
            alt="Login"
          />
        </div>
        <div className="blurbBox">
          {' '}
          <p>Project Brief</p>
          <p>
            {' '}
            Being a musician often times is a calling but that doesn't mean that
            it's easy. That's because creating music is no small task,
            especially when you understand how many pieces are in the puzzle.
          </p>
          <p>
            Mind-Link, brainchild of an amazing UX/UI team, solves the problems
            by connecting missing pieces of the puzzle. Post projects open for
            collaboration and get ready to get jammin'.
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

export default Mindlink;
