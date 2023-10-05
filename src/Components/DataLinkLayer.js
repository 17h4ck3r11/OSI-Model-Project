import React, { useEffect } from 'react'
import image from './assets/DataLink.jpg'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function DataLinkLayer() {
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
                <h1>Data Link Layer</h1>
            </div>
            <div className="return">
                <button onClick={()=> navigate('/')}>go back to the home page</button>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                The Data Link Layer is the second layer in the OSI (Open Systems Interconnection) model, situated just above the Physical Layer. It plays a vital role in network communication by providing reliable data transmission between directly connected nodes or devices on the same local network segment. <br />
                The Data Link Layer has two main sublayers:
                <ul>
                    <li>
                        <span>Logical Link Control (LLC):</span> This sublayer is responsible for providing a common interface and services to the Network Layer (Layer 3) above it. It handles tasks such as flow control, error detection, and framing.
                    </li>

                    <li>
                        <span>Media Access Control (MAC):</span> The MAC sublayer is responsible for controlling access to the physical transmission medium, such as Ethernet, Wi-Fi, or Token Ring. It manages issues like addressing, media arbitration, and frame formatting.
                    </li>
                </ul>

                Key functions and features of the Data Link Layer include:

                <ol>
                    <li>
                        <span>Framing:</span> Data from the Network Layer is divided into smaller frames for transmission over the physical medium. The Data Link Layer adds headers and trailers to these frames to mark the beginning and end of each frame and provide addressing information.
                    </li>

                    <li>
                        <span>Error Detection:</span> The Data Link Layer includes mechanisms for detecting errors that may occur during data transmission. Common methods include the use of checksums or cyclic redundancy checks (CRCs).
                    </li>

                    <li>
                        <span>Flow Control:</span> To prevent data overflow and ensure that data is transmitted at a rate that the receiving device can handle, flow control mechanisms are employed. This can be done using methods like windowing or acknowledgments.
                    </li>

                    <li>
                        <span>Addressing:</span> Each network card or interface in a local network segment has a unique hardware address known as a MAC address. The Data Link Layer uses these MAC addresses for local addressing to ensure that frames are delivered to the correct recipient on the same network.
                    </li>

                    <li>
                        <span>Media Access Control:</span> For shared or broadcast media, such as Ethernet, the MAC sublayer manages access to the transmission medium to avoid data collisions. Various protocols, like CSMA/CD (Carrier Sense Multiple Access with Collision Detection) in Ethernet, govern how devices share the medium.
                    </li>

                    <li>
                        <span>Error Recovery:</span> While the Data Link Layer primarily focuses on error detection, it may also perform error recovery tasks, like requesting retransmissions of frames if errors are detected.
                    </li>

                    <li>
                        <span>Duplex Mode:</span> The Data Link Layer defines whether a network segment operates in half-duplex (one direction at a time) or full-duplex (simultaneous bidirectional) mode.
                    </li>

                    <li>
                        <span>Logical Link Control (LLC):</span> The LLC sublayer provides a standardized interface to the Network Layer, allowing different network protocols (such as IP and IPX) to work over the same physical medium.
                    </li>
                </ol>

                The Data Link Layer is essential for ensuring that data is reliably transmitted between devices within the same local network segment. Popular data link layer technologies include Ethernet for wired networks and Wi-Fi for wireless networks.
            </div>
        </motion.div>
    )
}

export default DataLinkLayer
