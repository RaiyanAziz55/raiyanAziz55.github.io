import React from 'react';
import './css/Navbar.css';
import { Link } from "react-router-dom";


const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar')[0];

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
}

export default function Navbar() {
    return (
        <nav className='nav'>
            <a href='#' className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className='navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact </Link></li>
                </ul>
            </div>
        </nav >
    )

}