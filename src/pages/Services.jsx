import './pageCss/services.css';
import React from 'react';
import Navbar from "../components/Navbar";
import { ParallaxBanner, ParallaxProvider, ParallaxBannerLayer } from "react-scroll-parallax";
import aboutMeIMg from './mockups/HomeBack4.jpg';


function Services() {
  return (
    <body >
      <Navbar />
    <div className="container-body">
    <ParallaxProvider>
    <ParallaxBanner
      layers={[{ image: aboutMeIMg, speed: -15 }]}
      className="pp"
    />
      </ParallaxProvider>
    </div>
    </body>
  )
}

export default Services;