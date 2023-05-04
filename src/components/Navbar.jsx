import React from 'react';
import './css/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className='nav'>
            <div>
                <a href='#' class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
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