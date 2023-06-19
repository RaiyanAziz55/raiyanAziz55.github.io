import React , {useState} from 'react';
import Navbar from "../components/Navbar";
import './pageCss/Portfolio.css';
import img1 from './mockups/ffh.jpg';
import img2 from './mockups/ul.jpg';
import img3 from './mockups/p.jpg';

function Portfolio() {
  const [isHighlight, setIsHighlight] = useState(false);


  return (
    <body>
      <Navbar />
      <div className='portTitle'>
    <h1 >MY COLLECTION</h1>
    </div>
  <div className='grids'>
      <div className='folders'>
        <div className='FFH'
                onMouseEnter={() => setIsHighlight(true)}
                onMouseLeave={() => setIsHighlight(false)}
        >
          <img src={img1} alt="ffh" className={isHighlight ?  'section active':'section'} />
          <div className={isHighlight ?  'layer1 active':'layer1'}></div>
          <text className={isHighlight ?  't1 active':'t1'}> FFH </text>
          
        </div>
        <div className='Unlucciest'
            onMouseEnter={() => setIsHighlight(true)}
            onMouseLeave={() => setIsHighlight(false)}
        >
        <img src={img2} alt="unluck" className='section'/>
        <div className={isHighlight ?  'layer1 active':'layer1'}></div>
        <text className={isHighlight ?  't1 active':'t1'}> UNLUCCIEST </text>
        </div>
        <div className='personal'
         onMouseEnter={() => setIsHighlight(true)}
         onMouseLeave={() => setIsHighlight(false)}
        >
        <img src={img3} alt="ffh" className='section' />
        <div className={isHighlight ?  'layer1 active':'layer1'}></div>
        <text className={isHighlight ?  't1 active':'t1'}> PERSONAL </text>
        </div>
      </div>
      </div>
    </body>
  );
}

export default Portfolio;
