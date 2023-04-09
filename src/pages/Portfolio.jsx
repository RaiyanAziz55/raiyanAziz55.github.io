import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import useFirestore from '../Hooks/useFirestore';

function Portfolio() {
  const { docs } = useFirestore('FFHPHOTOSHOOT');
  console.log(docs);
  return (
    <body >
      <Navbar />
      <div>
        {docs && docs.map(doc => (
          <div className='img-wrap' key={doc.id}>
            <img src={doc.url} alt="pcs"></img>
          </div>
        ))}


      </div>
    </body>

  )
}

export default Portfolio;