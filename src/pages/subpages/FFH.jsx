import ImageGrid from '../../components/ImageGrid';
import React from 'react';
import Navbar from "../../components/Navbar";

import '../pageCss/Portfolio.css';
import Modal from '../../components/Modal';


function FFH() {

  

  return (
    <body>
      <Navbar />
      <ImageGrid folderName={"FFHPHOTOSHOOT"}/>
    </body>
  );
}

export default FFH;
