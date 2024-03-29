import React from 'react';
import './css/Footer.css';
import { Link } from "react-router-dom";
import iglogo from '../pages/mockups/iglogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>LUMIN FILMS</h3>
          <text className='social'>SOCIALS AND CONTACT</text>
          <text className='ql'>QUICK LINKS</text>
          <div className='quicklinks'>
        <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact </Link></li>
        </ul>

          </div>
          <div className='igsec'>
          <Link to="https://www.instagram.com/lumin_films/" target="_blank" rel="noopener noreferrer">
          <p className='ig'>Instagram</p>
          <img src={iglogo} alt="background"></img>
          </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 LUMIN FILMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
