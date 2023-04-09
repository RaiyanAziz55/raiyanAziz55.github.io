import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import useFirestore from '../Hooks/useFirestore';

function Portfolio() {
  const { docs } = useFirestore("FFHPHOTOSHOOT");
  console.log(docs);
  return (
    <div>
      <body >
        <Navbar />
        <div>
          <h1>Portfolio</h1>
          <div>
            <div>
              <span>EXPLORE Chicekn</span>
            </div>
          </div>

        </div>
      </body>
    </div>
  )
}

export default Portfolio;