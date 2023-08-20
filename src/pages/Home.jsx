import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from './mockups/home.jpg';
import Image2 from './mockups/HomeBackground2.jpg';
import { useInView } from 'react-intersection-observer';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from './mockups/m2.jpg';
import img2 from './mockups/m1.jpg';
import img3 from './mockups/IMG3.jpg';



function Home() {
  const { ref:imgRef, inView:imgView } = useInView();
  const { ref:txtRef, inView:txtView } = useInView();



  return (
    <body>
      <Navbar />
      <div className="container">
      <header>
          <img src={Image} alt="background" className='background'></img>
          <text id="introText">LUMIN FILMS</text>
          <text className='introPara'>Bringing everybody's inner model out.</text>
      </header>
      <section className='contents'>
        <div className='inside'>
        <h1 ref={txtRef} className={txtView ? 'slogan fade-in2 is-visible':'slogan fade-in2'}>
        I am Raiyan Aziz, the founder of Lumin Films. As a passionate photographer, my mission is to enhance the beauty of every individual I capture through my lens. If you are seeking someone who can expertly immortalize your moments, you have come to the perfect destination. This portfolio showcases a compilation of my work with a diverse range of wonderful clients. Please feel free to explore and appreciate the entirety of my portfolio!
          </h1>
        <img src={Image2} alt="introImg" ref={imgRef} className={imgView ? 'img fade-in is-visible':'img fade-in'}/>
        </div>
      </section>
      <section className='section2'>
        <h1 className="category">PORTFOLIO PREVIEW</h1>
        <div className='slider'>
        <img src={img1} alt="img1" />
        <img src={img2} alt="img1" />
        <img src={img3} alt="img1" />
        </div>
      </section>
      <Footer />
      </div>
    </body>

  )
}

export default Home;