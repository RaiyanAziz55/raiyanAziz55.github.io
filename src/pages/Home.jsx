import './pageCss/App.css';
import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../components/Navbar";
import Image from './mockups/HomeBack4.jpg';
import Image2 from './mockups/HomeBackground2.jpg';
import { useInView } from 'react-intersection-observer';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from './mockups/IMG4.jpg';
import img2 from './mockups/IMG2.jpg';
import img3 from './mockups/IMG3.jpg';
import img4 from './mockups/IMG1.jpg';


function Home() {
  const { ref:imgRef, inView:imgView } = useInView();
  const { ref:txtRef, inView:txtView } = useInView();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">1</div>,
  <div className="item" data-value="2">2</div>,
  <div className="item" data-value="3">3</div>,
  <div className="item" data-value="4">4</div>,
  <div className="item" data-value="5">5</div>,
];

  return (
    <body>
      <Navbar />
      <div className="container">
      <header>
          <img src={Image} className='background'></img>
          <text id="introText">LUMIN FILMS</text>
          <text className='introPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse est corporis praesentium ad quo maiores, harum deserunt reiciendis dolorem maxime iusto distinctio labore iure rerum earum illum illo consequatur totam!</text>
      </header>
      <section className='contents'>
        <div className='inside'>
        <h1 ref={txtRef} className={txtView ? 'slogan fade-in2 is-visible':'img fade-in2'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint aliquam voluptate atque nihil voluptatibus non voluptates est impedit, molestias laudantium quos tempora, explicabo magni officiis veniam dolorem cupiditate ullam.</h1>
        <img src={Image2} ref={imgRef} className={imgView ? 'img fade-in is-visible':'img fade-in'}/>
        </div>
      </section>
      <section className='section1'>
        <h1 className="category">PORTFOLIO</h1>
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
      </section>
      <section className='section2'>
        <h1 className="category">SERVICES</h1>
      </section>
      </div>
    </body>

  )
}

export default Home;