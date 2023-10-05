import React from "react";
import image from './assets/OSI.jpg'
import {motion} from 'framer-motion'

function OSICard() {
  return (
    <motion.div 
      className="osi"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="osi-card">
          <img
            className="image"
            src={image}
            alt=""
          />
      </div>
      <h2>
        The Open Systems Interconnection (OSI) model describes seven layers that computer systems use to communicate over a network. It was the first standard model for network communications, adopted by all major computer and telecommunication companies in the early 1980s

        The modern Internet is not based on OSI, but on the simpler TCP/IP model. However, the OSI 7-layer model is still widely used, as it helps visualize and communicate how networks operate, and helps isolate and troubleshoot networking problems.

        OSI was introduced in 1983 by representatives of the major computer and telecom companies, and was adopted by ISO as an international standard in 1984.
      </h2>
    </motion.div>
  );
}

export default OSICard;
