import ImageGrid from '../../components/ImageGrid';
import React, {useState} from 'react';
import Navbar from "../../components/Navbar";
import Modal from '../../components/Modal';

import '../pageCss/Portfolio.css';


function Unlucciest() {
    const [selectedImg, setSelectedImg] = useState(null);
  

  return (
    <body>
      <Navbar />
      <ImageGrid folderName={"UNLUCCIEST"} setSelectedImg = {setSelectedImg}/>
      <Modal selectedImg = {selectedImg}/>
    </body>
  );
}

export default Unlucciest;
