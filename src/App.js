import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const FFH = lazy(() => import('./pages/subpages/FFH'));
const Unlucciest = lazy(() => import('./pages/subpages/Unlucciest'));
const Personal = lazy(() => import('./pages/subpages/personal'));

const swipeTransition = {
  initial: { opacity: 0 },
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
            <Route path="/portfolio" element={<Portfolio />}>
              <Route path="ffh" element={<FFH />} />
              <Route path="unlucciest" element={<Unlucciest />} />
              <Route path="personal" element={<Personal />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
