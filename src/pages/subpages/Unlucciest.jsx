import ImageGrid from '../../components/ImageGrid';
import React, {useState} from 'react';
import Navbar from "../../components/Navbar";
import Modal from '../../components/Modal';

import '../pageCss/Portfolio.css';
import Footer from '../../components/Footer';

function Unlucciest() {
    const [selectedImg, setSelectedImg] = useState(null);
  

  return (
    <body>
      <Navbar />
      <h1 className='paget1'>UNLUCCIEST COLLECTION</h1>
      <ImageGrid folderName={"UNLUCCIEST"} setSelectedImg = {setSelectedImg}/>
      {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg}/>}

    </body>
  );
}

export default Unlucciest;
