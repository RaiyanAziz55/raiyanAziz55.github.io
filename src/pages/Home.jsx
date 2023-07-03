import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from './mockups/HomeBack4h.png';
import Image3 from './mockups/HomeBack42.png';
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
  <div className='item'>
  <img src={img1} alt="img1" id="img1" key="1"/>
  </div>,
  <div className='item'>
  <img src={img2}  alt="img2" id="img1" key="2"/>
  </div>,
  <div className='item'>
  <img src={img3}  alt="img3" id="img1" key="3"/>
  </div>,
  <div className='item'>
  <img src={img4}  alt="img4" id="img1" key="4"/>
  </div>,
];

  return (
    <body>
      <Navbar />
      <div className="container">
      <header>
          <img src={Image} alt="background" className='background'></img>
          <img src={Image3} alt="background" className='background2'></img>
          <text id="introText">LUMIN FILMS</text>
          <text className='introPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse est corporis praesentium ad quo maiores, harum deserunt reiciendis dolorem maxime iusto distinctio labore iure rerum earum illum illo consequatur totam!</text>
      </header>
      <section className='contents'>
        <div className='inside'>
        <h1 ref={txtRef} className={txtView ? 'slogan fade-in2 is-visible':'img fade-in2'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint aliquam voluptate atque nihil voluptatibus non voluptates est impedit, molestias laudantium quos tempora, explicabo magni officiis veniam dolorem cupiditate ullam.</h1>
        <img src={Image2} alt="introImg" ref={imgRef} className={imgView ? 'img fade-in is-visible':'img fade-in'}/>
        </div>
      </section>
      <section className='section1'>
        <h1 className="category">SERVICES</h1>
      </section>
      <section className='section2'>
        <h1 className="category">PORTFOLIO</h1>
        <div className='slider'>
        <AliceCarousel
         autoPlayStrategy={'none'}
      infinite={true}
        autoPlay={true}
        autoPlayInterval={2000}
        mouseTracking = {false}
        paddingLeft={50}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    </div>
      </section>
      <Footer />
      </div>
    </body>

  )
}

export default Home;