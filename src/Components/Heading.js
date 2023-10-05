import React from 'react'
import LayersCards from './LayersCards'
import OSICard from './OSICard'
import {motion} from 'framer-motion'

function Heading() {
  return (
    <motion.div 
      className='heading'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="heading1">
        <h1 style={{fontSize:"1.5em"}}>Open Systems Interconnection</h1>  
        <hr style={{marginBottom:"0.5%"}}/>   
        <OSICard />

      </div>
      <div className="options">
        <h1 style={{marginBottom:"0.75%", fontSize:'2.175em'}}>Layers of OSI Model</h1>
        <hr style={{marginBottom:"2%"}}/>
        <LayersCards />
      </div>
    </motion.div>
  )
}

export default Heading
