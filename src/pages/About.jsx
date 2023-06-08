import './pageCss/about.css';
import React from 'react';
import Navbar from "../components/Navbar";
import aboutMeIMg from './mockups/aboutMe.jpg';
import cameraImg from "./mockups/camera.jpg";
import  ParallaxEffect from "../components/ParallaxEffect";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

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
            <h1 className='title'>ABOUT ME</h1>
            <div>
              <text className='aboutMeTxt'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam praesentium at, dolor ipsam
                obcaecati animi quo. Quaerat cumque laudantium ad pariatur, velit qui eveniet ex et. Vitae voluptatum
                illum explicabo voluptates commodi corporis possimus inventore mollitia animi. A, incidunt! Iusto
                cumque, molestias veniam incidunt laborum minus ex ducimus doloremque.
              </text>
            </div>
          </div>
        </section >
        <section className='firstPart'>
        <div className='txtCont1'>
            <h1 className='title'>ABOUT ME</h1>
            <div>
              <text className='aboutMeTxt'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam praesentium at, dolor ipsam
                obcaecati animi quo. Quaerat cumque laudantium ad pariatur, velit qui eveniet ex et. Vitae voluptatum
                illum explicabo voluptates commodi corporis possimus inventore mollitia animi. A, incidunt! Iusto
                cumque, molestias veniam incidunt laborum minus ex ducimus doloremque.
              </text>
            </div>
          </div>
        </section>
        <section></section>
      </body>

  );
}

