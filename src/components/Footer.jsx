import React from 'react';
import './css/Footer.css';
import { Link } from "react-router-dom";

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
          <p className='ig'>
          <Link to="https://www.instagram.com/photogbyaziz/" target="_blank" rel="noopener noreferrer">
            Instagram
</Link></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
