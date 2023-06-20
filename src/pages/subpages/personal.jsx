import ImageGrid from '../../components/ImageGrid';
import React from 'react';
import Navbar from "../../components/Navbar";

import '../pageCss/Portfolio.css';


function FFH() {


  return (
    <body>
      <Navbar />
      <ImageGrid folderName={"PERSONAL"}/>
    </body>
  );
}

export default FFH;
