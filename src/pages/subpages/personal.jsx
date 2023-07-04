import ImageGrid from '../../components/ImageGrid';
import React, {useState} from 'react';
import Navbar from "../../components/Navbar";
import Modal from '../../components/Modal';
import Footer from '../../components/Footer';
import '../pageCss/Portfolio.css';


function Personal() {
    const [selectedImg, setSelectedImg] = useState(null);


  return (
    <body>
      <Navbar />
      <h1 className='paget1'>PERSONAL COLLECTION</h1>
      <ImageGrid folderName={"PERSONAL"}  setSelectedImg = {setSelectedImg}/>
      {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg}/>}

    </body>
  );
}

export default Personal;
