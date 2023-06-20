import ImageGrid from '../../components/ImageGrid';
import React from 'react';
import Navbar from "../../components/Navbar";

import '../pageCss/Portfolio.css';


function Unlucciest() {

  

  return (
    <body>
      <Navbar />
      <ImageGrid folderName={"UNLUCCIEST"}/>
    </body>
  );
}

export default Unlucciest;
