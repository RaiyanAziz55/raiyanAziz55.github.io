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
  <div className='grids'>
      <div className='folders'>
        <div className='FFH'>
          <text>hello</text>
        </div>
        <div className='Unlucciest'>
        <text>hello</text>
        </div>
        <div className='personal'>
        <text>hello</text>
        </div>
      </div>
      </div>
    </body>
  );
}

export default Portfolio;
