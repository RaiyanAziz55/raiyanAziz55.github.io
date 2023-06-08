import './pageCss/services.css';
import React from 'react';
import Navbar from "../components/Navbar";
import { ParallaxBanner, ParallaxProvider, ParallaxBannerLayer } from "react-scroll-parallax";
import aboutMeIMg from './mockups/HomeBack4.jpg';
import {useScroll, motion, useTransform} from "framer-motion";


function Services() {
  let {scrollYProgress} = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ["0%", "50%"]);
  return (
    <body >
      <section>
      <Navbar />

      <motion.div>
      <img src={aboutMeIMg} className='firstImg'></img>
      </motion.div>
      </section>
      <section></section>
    </body>
  )
}

export default Services;