import React from 'react';
import './css/Navbar.css';

export default function Navbar(){

    return (
        <nav className='nav'>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="contact">Contact </a></li>
            </ul>
        </nav>
    )

}