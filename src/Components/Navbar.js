import React from "react";
import { Cursor } from "react-simple-typewriter";
import logo from './assets/logo.jpg'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <motion.div 
      className='navbar'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="container flex flex-col">
        <span>
        <img
          className="border-white"
          style={{ width: "100%", display:'block', marginBottom:"3%"}}
          src={logo}
          alt=""
        />
        </span>
          <span className="nav-bottom">
           <span> stay connected<Cursor cursorStyle="_" /></span>
           <button type="button" className="menu p-2 rounded-br" >MENU</button>
          </span>
      </div>      
    </motion.div>
  );
}

export default Navbar;
