import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import Image from './mockups/HomeBackground2.jpg';


function Home() {
  return (
    <body>
      <div className="container">
        <Navbar />
        <div>

          <h1 id="introText">LUMIN FILMS</h1>
          <div>
            <div className="btn btn-one">
              <span>EXPLORE</span>
            </div>
          </div>
        </div>

      </div>
      <div className='contents'>
        <div id="t1">
          <h1 id="slogan">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint aliquam voluptate atque nihil voluptatibus non voluptates est impedit, molestias laudantium quos tempora, explicabo magni officiis veniam dolorem cupiditate ullam.</h1>
        </div>
        <img src={Image} alt="Girl in a jacket" id="img"></img>
      </div>
      <div className='section'>
        <h1 className="category">PORTFOLIO</h1>
      </div>
      <div className='section'>
        <h1 className="category">SERVICES</h1>
      </div>
    </body>

  )
}

export default Home;