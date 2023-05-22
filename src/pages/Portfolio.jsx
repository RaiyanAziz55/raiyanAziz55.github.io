import React from 'react';
import Navbar from "../components/Navbar";
import UseFirestore from '../Hooks/useFirestore';
import './pageCss/Portfolio.css';

function Portfolio() {
  const { imgs } = UseFirestore();
  console.log(imgs);
  

  return (
    <body>
      <Navbar />
      <div className='img-wrap'>
        {imgs && imgs.map((img) => (
          <img src={img.url} alt="Image" key={img.id} />
        ))}
      </div>
    </body>
  );
}

export default Portfolio;
