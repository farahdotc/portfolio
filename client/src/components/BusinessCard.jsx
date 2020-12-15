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
  }, []);

  const randomQuote = apiData[Math.floor(Math.random() * apiData.length)];
  console.log(randomQuote);
  console.log(Object.values(apiData));

  return (
    <div id="businessCardBox">
      <div id="name">farah cadet</div>
      <div className="title">web developer</div>
      <div className="title">design professional</div>
      <div className="post">
        <div>{apiData.content}</div>
        <div>-{apiData.author}</div>
      </div>
    </div>
  );
};

export default BusinessCard;

// {
//    {apiData.map((quote) => {
//         return (

//    key={apiData.quote}
//             quote={apiData.quote}
//             author={apiData.author}

//    })}
// }
// {randomQuote.text}
// {/* {apiData[Math.floor(Math.random() * apiData.length)]} */}
// {apiData.text + '    ' + '-' + apiData.author}

// {Object.keys(randomQuote.object).map((key, i) => (
//   <p key={i}>
//     <span>Key Name: {key}</span>
//     <span>Value: {randomQuote.object[key]}</span>
//   </p>
// ))}
