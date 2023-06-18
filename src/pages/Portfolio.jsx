import React from 'react';
import Navbar from "../components/Navbar";
import './pageCss/Portfolio.css';

function Portfolio() {
  return (
    <body>
      <Navbar />
      <div className='portTitle'>
    <h1 >MY COLLECTION</h1>
    </div>
      <div className='folders'>
        <div className='FFH'></div>
        <div className='Unlucciest'></div>
        <div className='personal'></div>
      </div>

    </body>
  );
}

export default Portfolio;
