import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";
import Image from './mockups/HomeBack4.jpg';
import Image2 from './mockups/HomeBackground2.jpg';



function Home() {

  return (
    <body>
      <Navbar />
      <div className="container">
      <header>
          <img src={Image} className='background'></img>
          <text id="introText">LUMIN FILMS</text>
          <text className='introPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse est corporis praesentium ad quo maiores, harum deserunt reiciendis dolorem maxime iusto distinctio labore iure rerum earum illum illo consequatur totam!</text>
      </header>
      <section className='contents'>
        <h1 id="slogan">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint aliquam voluptate atque nihil voluptatibus non voluptates est impedit, molestias laudantium quos tempora, explicabo magni officiis veniam dolorem cupiditate ullam.</h1>
        <img src={Image2} alt="Girl in a jacket" id="img"></img>
      </section>
      <section className='section'>
        <h1 className="category">PORTFOLIO</h1>
      </section>
      <section className='section'>
        <h1 className="category">SERVICES</h1>
      </section>
      </div>
    </body>

  )
}

export default Home;