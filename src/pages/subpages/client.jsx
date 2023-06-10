import React from 'react';
import Navbar from "../../components/Navbar";
import UseFirestore from '../../Hooks/useFirestore';
import '../pageCss/Portfolio.css';


function client() {
  const { imgs } = UseFirestore();
  console.log(imgs);
  

  return (
    <body>
      <Navbar />
      <div className='img-wrap'>
        {imgs && imgs.map((img) => (
          <img src={img.url} alt="sumthing" key={img.id} />
        ))}
      </div>
    </body>
  );
}

export default client;
