import React, {useState} from "react";
import './css/Navbar.css';
import { Link } from "react-router-dom";



export default function Navbar() {
    const [isMenu, setIsMenu] = useState(false);


    const showMenu = () => setIsMenu(!isMenu);



    return (
        <nav className='nav'>
            <div className={isMenu ? 'navbar active' : 'navbar'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact </Link></li>
                </ul>
            </div>
            <button className={isMenu ? 'hamburg active' : 'hamburg'} onClick={showMenu}>
                    <div className='bar'></div>
                </button>
        </nav >
    )

}

/*
window.onload=function(){
const menu = document.querySelector('.hamburg');
const menu2 = document.querySelector('.navbar');
console.log(menu);
console.log(menu2);
menu.addEventListener('click', function (){
    menu.classList.toggle('active');
    menu2.classList.toggle('active');
})
}*/
