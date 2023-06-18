import React from 'react';
import Navbar from "../components/Navbar";
import './pageCss/Portfolio.css';
import img1 from './mockups/ffh.jpg';
import img2 from './mockups/ul.jpg';
import img3 from './mockups/p.jpg';

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
          <img src={img1} alt="ffh" className='section' />
          <text className='t1'> FFH </text>
        </div>
        <div className='Unlucciest'>
        <img src={img2} alt="unluck" className='section'/>
        </div>
        <div className='personal'>
        <img src={img3} alt="ffh" className='section' />
        </div>
      </div>
      </div>
    </body>
  );
}

export default Portfolio;
