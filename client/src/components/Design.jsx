import React from 'react';
import './Design.css';

const Design = () => {
  return (
    <div>
      {/* <div id="comingSoon">coming soon...</div> */}
      <div id="productDesignIntro">design projects</div>
      <div id="productDesignProjBox">
        <a href="/projects#tea">
          <div id="productDesignTea"></div>
          <div id="descBoxTea">
            {' '}
            High Tea Time - How do you monetize an afternoon tea experience
            aboard an all-inclusive ship?
          </div>
        </a>
        <a href="/projects#uniform">
          <div id="productDesignUniform"></div>
          <div id="descBoxUniform"> Ship Shape -</div>
        </a>
        <a href="/projects#table">
          <div id="productDesignTable"></div>
          <div id="descBoxTable"> coming soon</div>
        </a>
      </div>
    </div>
  );
};

export default Design;
