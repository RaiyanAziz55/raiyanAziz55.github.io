import './pageCss/services.css';
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function Services() {
  return (
    <body >
      <Navbar />
      <div className='sCont'>
        <section className='Service1'>
            <h3 >WHAT I DO</h3>
            <p>If there are any inquiries relating to any of these services, please feel free to contact me in the contact page.</p>
        </section>
        <section className='Scontents'>
          <div className='Brand'>
           <text> BRAND PHOTOGRAPHY</text>
           <p>As previously worked with start-up brands like FFH and Unlucciest, I am always available for hire with any sort of brand photography.</p>
            </div>
          <div className='Clientele'>
          <text>CLIENT PHOTOGRAPHY</text>
          <p>With experience working with many clients under my belt, I can any kind of pictures suiting to the clients needs and wants.</p>
          </div>
          <div className='Sports'>
          <text>SPORTS PHOTOGRAPHY</text>
          <p>Having worked in different sporting events, I can take perfect action photos when athletes are engulfed in their sport.</p>
          </div>
        </section>
      </div>
    <Footer />
    </body>
  )
}

export default Services;