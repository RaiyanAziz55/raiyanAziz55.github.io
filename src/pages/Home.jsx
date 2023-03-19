import './pageCss/App.css';
import React from 'react';
import Navbar from "../components/Navbar";


function Home(){
    return (
        <div>
        <body className="container">
        <Navbar />
            <div>
                <h1 id="introText">BRAND NAME</h1>
                <div>
                    <div className="btn btn-one">
                      <span>EXPLORE</span>
                    </div>
                  </div>
                   
            </div>
        </body>
        </div>
          )
}

export default Home;