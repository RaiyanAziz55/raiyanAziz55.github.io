import './pageCss/contact.css';
import React from 'react';
import Navbar from "../components/Navbar";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import img from './mockups/HomeBack4.jpg';

export default function Contact() {
    return (

        <body >
            <Navbar />
            <div>
                <ParallaxProvider>
            <ParallaxBanner
      layers={[{ image: img, speed: -15 }]}
      className="pic"
    />
    </ParallaxProvider>
            </div>

        </body>

    )
}
