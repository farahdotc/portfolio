import React from 'react';
import './Projects.css';

const Albumology = () => {
  return (
    <div style={{ marginTop: '15vh' }}>
      <h1 className="pageTitle">projects</h1>
      <h1 className="projectTitle" id="album">
        Albumology
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
              src={require('../../assets/midterm.png')}
              alt="Albumology"
            />
          </div>
        </a>
        <div className="gifBox">
          <img className="imgScale" src={require('./ology.png')} alt="Albums" />
        </div>
        <div className="blurbBox">
          {' '}
          <p>Project Brief</p>
          <p>
            Teamed up into a group of four, my peers and I were charged with
            creating an app that solved a unique problem using REACT, API's,
            CSS, Express and JavaScript.
          </p>
          <p>
            From that we bring you ALBUMOLOGY - A stunning visual display of all
            the albums by your favorite artists. Take a journey through your
            life narrarated by visuals of the music you've loved!
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

export default Albumology;
