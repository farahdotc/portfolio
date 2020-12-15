import React, { useState, useEffect } from 'react';
import './BusinessCard.css';
import axios from 'axios';

const BusinessCard = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.quotable.io/random');
      setApiData(result.data);
    };
    fetchData();
    const interval = setInterval(() => fetchData(), 7000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="businessCardBox">
      <div id="name">farah cadet</div>
      <div className="title">web developer</div>
      <div className="title">design professional</div>
      <div className="post">
        <div className="fadeIn">{apiData.content}</div>
        <div className="fadeIn">-{apiData.author}</div>
      </div>
    </div>
  );
};

export default BusinessCard;
