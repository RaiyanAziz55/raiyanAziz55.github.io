import React from "react";
import "../../src/pages/pageCss/Portfolio.css";

const Modal = ( {selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setSelectedImg(null);
        }
    }
    
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt = "Image"/>
        </div>
    )

}

export default Modal;