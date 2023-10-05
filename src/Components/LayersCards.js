import React, { useEffect, useState } from "react";
import image1 from "./assets/Physical.webp";
import image2 from "./assets/DataLink.jpg";
import image3 from "./assets/Network.jpg";
import image4 from './assets/Transport.jpg';
import image5 from "./assets/Session.jpg";
import image6 from './assets/Presentation.jpg';
import image7 from './assets/Application.jpg';
import { Link } from "react-router-dom";

function LayersCards() {
  const [animatedButton, setanimatedButton] = useState()
  const [cursor, setCursor] = useState()

  useEffect(() => {
    const animatedButton = document.getElementById('animated-button')
    const cursor = document.getElementById('cursor')

    if(animatedButton!= null && cursor!=null) {
      setCursor(cursor)
      setanimatedButton(animatedButton)
    }
  }, [])  
  
  const enter = ()=>{
    cursor.style.width = '5.5%'
    cursor.style.height = '4%'
    animatedButton.style.opacity = 1
    animatedButton.style.scale = 1
  }

  const leave =  ()=>{
    cursor.style.width = '30px'
    cursor.style.height = '30px'
    animatedButton.style.opacity = 0
    animatedButton.style.scale = 0
  }

  return (
    <div className="cards">
      <div id='image-container' className="layer-card" onMouseEnter={enter} onMouseLeave={leave}>
      <Link to="/physicallayer">
        <div className="image-link">
            <img className="image" src={image1} alt="" />
        </div>
            Physical Layer
        </Link>
      </div>  

      <div id='image-container' className="layer-card" onMouseEnter={enter} onMouseLeave={leave}>
      <Link to="/datalinklayer">
        <div className="image-link">
            <img className="image" src={image2} alt="" />
        </div>
        Data-Link Layer
        </Link>
      </div>

      <div id='image-container' className="layer-card" onMouseEnter={enter} onMouseLeave={leave}>
        <Link to="/networklayer">
        <div className="image-link">
            <img className="image" src={image3} alt="" />
        </div>
        Network Layer
        </Link>
      </div>

      <div id='image-container' className="layer-card" onMouseEnter={enter} onMouseLeave={leave}>
       <Link to="/transportlayer">
        <div className="image-link">
            <img className="image" src={image4} alt="" />
        </div>
        Transport Layer
        </Link>
      </div>

      <div id='image-container' className="layer-card" onMouseEnter={enter} onMouseLeave={leave}>
        <Link to="/sessionlayer">
        <div className="image-link">
            <img className="image" src={image5} alt="" />
        </div>
        Session Layer
        </Link>
      </div>

      <div id='image-container' className="layer-card" onMouseEnter={enter} onMouseLeave={leave}>
        <Link to="/presentationlayer">
        <div className="image-link">
            <img className="image" src={image6} alt="" />
        </div>
        Presentation Layer
        </Link>
      </div>

      <div id='image-container' className="layer-card" onMouseEnter={enter} onMouseLeave={leave}>
        <Link to="applicationlayer">
        <div className="image-link">
            <img className="image" src={image7} alt="" />
        </div>
        Application Layer
        </Link>
      </div>

    </div>
  );
}

export default LayersCards;
