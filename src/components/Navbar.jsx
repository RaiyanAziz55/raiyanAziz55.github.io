import React, {useState, useRef} from "react";
import './css/Navbar.css';
import { Link } from "react-router-dom";



export default function Navbar() {
    const [isMenu, setIsMenu] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isHighlight, setIsHighlight] = useState(false);

    const showMenu = () => setIsMenu(!isMenu);

    const elementRef = useRef(null);
    const elementRef2 = useRef(null);

    const handleMouseLeave = (event) => {
      const { top, left, width, height } = elementRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;
  
      if (
        clientX < left || 
        clientX > left + width ||
        clientY < top
      ) {
        setIsShow(false);
        setIsHighlight(false);
      } else if (clientY > top + height) {
        setIsHighlight(true);
    }
}

    const handleMouseLeave2 = (event) => {
        const { top, left, width, height } = elementRef2.current.getBoundingClientRect();
        const { clientX, clientY } = event;
        if (
          clientX < left || 
          clientX > left + width || 
          clientY > top+height 
        ) {
          setIsShow(false);
          setIsHighlight(false);
        }
      }

    return (
        <nav className='nav'>
            <div className={isMenu ? 'navbar active' : 'navbar'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio" ref={elementRef}
                     onMouseEnter={() => setIsShow(true)}
                     onMouseLeave={handleMouseLeave}
                     className={isHighlight ? 'dropdownPort active' : ''}>
                     Portfolio ⌵</Link>
                    <div ref={elementRef2} 
                    onMouseEnter={() => setIsHighlight(true)}
                    className={isShow ? 'dropdown-content is-visible' : 'dropdown-content'}  onMouseLeave={handleMouseLeave2}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                    </div>
                    </li>
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


