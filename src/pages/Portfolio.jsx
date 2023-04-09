import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import useFirestore from '../Hooks/UseFirestore';

function Portfolio() {

  return (
    <div>
      <body >
        <Navbar />
        <div>
          <h1>Portfolio</h1>
          <div>
            <div>
              <span>EXPLORE</span>
            </div>
          </div>

        </div>
      </body>
    </div>
  )
}

export default Portfolio;