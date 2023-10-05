import React, { useEffect } from 'react'
import image from './assets/Transport.jpg'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function TransportLayer() {
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
                <h1>Transport Layer</h1>
            </div>
            <div className="return">
                <button onClick={()=> navigate('/')}>go back to the home page</button>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                The Transport Layer is the fourth layer in the OSI (Open Systems Interconnection) model, situated above the Network Layer (Layer 3) and below the Session Layer (Layer 5). It plays a critical role in end-to-end communication by ensuring that data is reliably and efficiently transferred between two devices across a network. <br />
                
                The Transport Layer provides various services and features, including:
                <ol>
                    <li>
                        <span>Segmentation and Reassembly:</span> The Transport Layer divides large messages or data streams into smaller segments for transmission over the network. These segments are then reassembled at the receiving end to reconstruct the original message. This process helps manage the efficient use of network resources.
                    </li>

                    <li>
                        <span>Error Detection and Correction:</span> It includes mechanisms for detecting errors in the transmitted data and, in some cases, correcting them. Error detection codes, such as checksums or cyclic redundancy checks (CRCs), are often used to ensure data integrity.
                    </li>

                    <li>
                        <span>Flow Control:</span> Flow control mechanisms are employed to prevent congestion and data loss when data is transmitted from a sender to a receiver. Flow control ensures that data is sent at a rate that the receiving device can handle, preventing overwhelming the receiver.
                    </li>

                    <li>
                        <span>Congestion Control:</span> This layer is responsible for managing network congestion to prevent packet loss and ensure efficient data transfer. It uses various algorithms to adapt to changing network conditions and adjust the rate of data transmission accordingly.
                    </li>

                    <li>
                        <span>Port Numbers:</span> Transport Layer protocols use port numbers to distinguish different services or applications running on the same device. These port numbers help direct incoming data to the appropriate application or service.
                    </li>

                    <li>
                        <span>End-to-End Communication:</span> The Transport Layer provides end-to-end communication services, ensuring that data is delivered to the correct application or process on the destination device.
                    </li>

                     <li>   
                        <span>Protocol Selection:</span> It allows for the selection of appropriate transport layer protocols based on factors like reliability requirements, data volume, and latency constraints. Two common Transport Layer protocols are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).
                    </li>

                    <li>
                        <span>Reliability (TCP):</span> TCP is a connection-oriented protocol that offers reliable, error-checked data delivery. It ensures that data is received in the correct order and retransmits lost or corrupted packets.
                    </li>

                    <li>
                        <span>Low Overhead (UDP):</span> UDP is a connectionless protocol that provides a lightweight data transport mechanism. It doesn't guarantee reliability or error correction but is suitable for applications where low overhead and speed are more important than reliability, such as streaming media or online gaming.
                    </li>
                </ol>

                In summary, the Transport Layer is responsible for end-to-end communication, data segmentation, error handling, flow control, and ensuring that data is reliably and efficiently transmitted between devices across a network. The choice between TCP and UDP depends on the specific requirements of the application or service being used.
            </div>
        </motion.div>
    )
}

export default TransportLayer
