import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import FFH from './pages/subpages/FFH';
import Unlucciest from './pages/subpages/Unlucciest';
import Personal from './pages/subpages/personal';

const swipeTransition = {
  initial: { opacity: 0},
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const App = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.key}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={swipeTransition}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/ffh" element={<FFH />} />
            <Route path="/portfolio/unlucciest" element={<Unlucciest />} />
            <Route path="/portfolio/personal" element={<Personal />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
