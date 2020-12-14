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
          <p>
            When you think of sushi lovers do you think of kids? At this
            all-inclusive resort specifically for kids, this restaurant is
            clearly a nod to the parents. No reason a beach vacation should only
            be tacos and drinks in a coconut with the bright paper umbrella. Let
            there be sashim, nigiri, rolls, and tempura everything!
          </p>
          <p>
            This space was designed and constructed within five months of
            receiving drawings of the proposed building shell. Staying in close
            communications with the site teams, procurement and vendors brought
            to life my design that speaks for itself...konnichi wa.
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

export default Soy;
