import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import useFirestore from '../Hooks/useFirestore';
import './pageCss/Portfolio.css';
import img1 from './mockups/IMG4.jpg';
import img2 from './mockups/IMG2.jpg';
import img3 from './mockups/IMG3.jpg';
import img4 from './mockups/IMG1.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Portfolio() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
};

const items = [
  <img src={img1} key="1"/>,
  <img src={img2} key="2"/>,
  <img src={img3} key="3"/>,
  <img src={img4} key="4"/>,
  <img src={img4} key="5"/>,
];
  const { docs } = useFirestore('FFHPHOTOSHOOT');
  console.log(docs);
  return (
    <body >
      <Navbar />
      <div>
      <AliceCarousel
      infinite={true}
        autoPlay={true}
        autoPlayInterval={2000}
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
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