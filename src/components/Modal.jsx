import React from "react";
import "../../src/pages/pageCss/Portfolio.css";

const Modal = ( {selectedImg}) => {
    
    return (
        <div className="backdrop">
            <img src={selectedImg} alt = "Image"/>
        </div>
    )

}

export default Modal;