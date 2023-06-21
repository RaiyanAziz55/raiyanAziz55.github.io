import ImageGrid from '../../components/ImageGrid';
import React, {useState} from 'react';
import Navbar from "../../components/Navbar";

import '../pageCss/Portfolio.css';
import Modal from '../../components/Modal';


function FFH() {
  const [selectedImg, setSelectedImg] = useState(null);
  

  return (
    <body>
      <Navbar />
      <h1 className='paget1'>FFH COLLECTION</h1>
      <ImageGrid folderName={"FFHPHOTOSHOOT"} setSelectedImg = {setSelectedImg}/>
      {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg}/>}
    </body>
  );
}

export default FFH;
