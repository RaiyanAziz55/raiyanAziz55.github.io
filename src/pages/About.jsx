import './pageCss/about.css';
import React from 'react';
import Navbar from "../components/Navbar";
import aboutMeIMg from './mockups/aboutMe.jpg';
import cam from './mockups/cam.jpg';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Footer from '../components/Footer';

export default function About() {
  return (
      <body>
        <Navbar />
        <section className='firstPart'>
          <div>
          <ParallaxProvider>
            <ParallaxBanner
      layers={[{ image: aboutMeIMg, speed: -15 }]}
      className="pic"
    />
    </ParallaxProvider>
          </div>
          <div className='txtCont1'>
            <h1 className='title'>HELLO! I AM RAIYAN AZIZ.</h1>
            <div>
              <text className='aboutMeTxt'>
              I have been practicing photography for over two years, honing my skills and exploring different styles through collaborations with a diverse range of clients. In addition to working with two start-up brands, I have had the privilege of partnering with numerous exceptional clients on various projects.
              </text>
            </div>
          </div>
          
        </section >
        <section className='firstPart'>
        <div className='txtCont2'>
            <div>
              <text className='aboutMeTxt2'>
              As a self-taught photographer, my skills and style have evolved through collaborations with clients of diverse tastes and through extensive online learning. What captivates me about photography is the ability to embark on a simple stroll and stumble upon new compositions and themes in an instant. The artistic freedom offered by photography is truly remarkable, allowing artists to continuously nurture their growth and development. (Fun Fact: I made this website from scratch)
              </text>
            </div>
          </div>
          <div>
          <ParallaxProvider>
            <ParallaxBanner
      layers={[{ image: cam, speed: -15 }]}
      className="pic"
    />
    </ParallaxProvider>
          </div>
        </section >
        <Footer/>
      </body>

  );
}

