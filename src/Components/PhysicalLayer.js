import React, { useEffect } from 'react'
import image from './assets/Physical.webp'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function PhysicalLayer() {
    useEffect(() => {
        const animatedButton = document.getElementById('animated-button')
        const cursor = document.getElementById('cursor')

        if(animatedButton!= null && cursor!=null) {
            cursor.style.width = '30px'
            cursor.style.height = '30px'
            animatedButton.style.opacity = 0
            animatedButton.style.scale = 0
        }
    }, []) 

    const navigate = useNavigate()

    return (
        <motion.div 
            className='flex-div'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <div className="heading">
                <h1>Physical Layer</h1>
            </div>
            <div className='return'>
                <button onClick={()=> navigate('/')}>go back to the home page</button>
            </div>
            <div className="img">
                <img src={image} alt="Physical Layer" />
            </div>
            <div className="content">
                The Physical Layer is the first and lowest layer in the OSI (Open Systems Interconnection) model. It is primarily concerned with the physical aspects of data transmission within a network. <br />The main functions and responsibilities of the Physical Layer include:
                
                <ol>
                    <li>
                        <span>Transmission of Raw Data:</span> The Physical Layer is responsible for transmitting raw binary data over the physical medium, such as cables (e.g., copper or fiber-optic), wireless signals, or other transmission media. It deals with the actual electrical or optical signals used to represent binary 0s and 1s.
                    </li>

                    <li>
                        <span>Physical Connection:</span> This layer defines the characteristics of the physical connection between devices, including the type of cable, connectors, and signaling methods used. It specifies details such as voltage levels, cable pinouts, and signal timing.
                    </li>

                    <li>
                        <span>Physical Topology:</span> The Physical Layer describes how devices are physically connected in the network, whether it's a bus, star, ring, or mesh topology. It also deals with issues related to physical addressing, such as MAC (Media Access Control) addresses in Ethernet networks.
                    </li>

                    <li>
                        <span>Bit Rate and Data Rate:</span> It specifies the data transmission rate in terms of bits per second (bps) or baud rate. This includes factors like the signaling speed and the modulation techniques used to transmit data.
                    </li>

                    <li>
                        <span>Signal Encoding: </span> The Physical Layer defines how data is encoded into electrical or optical signals for transmission. Different encoding schemes, such as NRZ (Non-Return-to-Zero) and Manchester encoding, are used for different types of media.
                    </li>

                    <li>
                        <span>Physical Layer Devices:</span> It involves devices that operate at this layer, such as network cables, hubs, and repeaters. Hubs, for example, are simple devices that operate at the Physical Layer and connect multiple devices in a network segment.
                    </li>

                    <li>
                        <span>Bit Synchronization:</span> Ensuring that the sender and receiver are synchronized in terms of bit timing is a responsibility of the Physical Layer. This synchronization is crucial for reliable data transmission.
                    </li>
               
                </ol>

                In summary, the Physical Layer in the OSI model focuses on the physical aspects of network communication, including the transmission medium, signaling methods, and the hardware devices that facilitate the actual transmission of binary data over the network. It provides the foundation upon which higher-level layers build their communication functions.
            </div>
        </motion.div>
    )
}

export default PhysicalLayer
