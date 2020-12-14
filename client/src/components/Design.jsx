import React from 'react';
import './Design.css';

const Design = () => {
  return (
    <div>
      <div id="productDesignIntro">design projects</div>
      <div id="productDesignProjBox">
        <a href="/projects#tea">
          <div id="productDesignTea"></div>
          <div id="descBoxTea">
            {' '}
            High Tea - How do you monetize an afternoon tea experience aboard an
            all-inclusive ship?
          </div>
        </a>
        <a href="/projects#uniform">
          <div id="productDesignUniform"></div>
          <div id="descBoxUniform">
            {' '}
            Ship Chic - When you're dressed like a rockstar you can't help but
            to give rockstar service.
          </div>
        </a>
        <a href="/projects#soy">
          <div id="productDesignSoy"></div>
          <div id="descBoxSoy">
            {' '}
            Sushi Time at Soy - Indulge in a fun sushi restaurant at an
            all-inclusive kid friendly resort.
          </div>
        </a>
      </div>
    </div>
  );
};

export default Design;
