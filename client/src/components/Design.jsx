import React from 'react';
import './Design.css';

const Design = () => {
  return (
    <div>
      {/* <div id="comingSoon">coming soon...</div> */}
      <div id="productDesignIntro">design projects (more coming soon)</div>
      <div id="productDesignProjBox">
        <a href="/projects#tea">
          <div id="productDesignTea"></div>
          <div id="descBoxTea">
            {' '}
            High Tea Time - How do you monetize an afternoon tea experience
            aboard an all-inclusive ship?
          </div>
        </a>
        <div id="productDesignUniform"></div>
        <div id="productDesignTable"></div>
      </div>
    </div>
  );
};

export default Design;
