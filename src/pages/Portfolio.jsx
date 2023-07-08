import React , {useState} from 'react';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import './pageCss/Portfolio.css';
import img1 from './mockups/ffh.jpg';
import img2 from './mockups/ul.jpg';
import img3 from './mockups/p.jpg';



function Portfolio() {
  const [isHighlight, setIsHighlight] = useState(false);
  const [isHighlight1, setIsHighlight1] = useState(false);
  const [isHighlight2, setIsHighlight2] = useState(false);


  return (
    <body>
      <Navbar />
      <div className='portTitle'>
    <h1 >MY COLLECTIONS</h1>
    </div>
  <div className='grids'>
      <div className='folders'>
        <Link to="/portfolio/ffh">
        <div className='FFH'
                onMouseEnter={() => setIsHighlight(true)}
                onMouseLeave={() => setIsHighlight(false)}
        >
          <img src={img1} alt="ffh" className={isHighlight ?  'section active':'section'} />
          <div className={isHighlight ?  'layer1 active':'layer1'}></div>
          <text className={isHighlight ?  't1 active':'t1'}> FFH </text>
          
        </div>
        </Link>

        <Link to="/portfolio/unlucciest">
        <div className='Unlucciest'
            onMouseEnter={() => setIsHighlight1(true)}
            onMouseLeave={() => setIsHighlight1(false)}
        >
        <img src={img2} alt="unluck" className='section'/>
        <div className={isHighlight1 ?  'layer1 active':'layer1'}></div>
        <text className={isHighlight1 ?  't1 active':'t1'}> UNLUCCIEST </text>
        </div>
        </Link>

        <Link to="/portfolio/personal">
        <div className='personal'
         onMouseEnter={() => setIsHighlight2(true)}
         onMouseLeave={() => setIsHighlight2(false)}
        >
        <img src={img3} alt="ffh" className='section' />
        <div className={isHighlight2 ?  'layer1 active':'layer1'}></div>
        <text className={isHighlight2 ?  't1 active':'t1'}> PERSONAL </text>
        </div>
        </Link>
      </div>
      </div>
      <div>
      </div>
    </body>
  );
}

export default Portfolio;
