import React, { useEffect } from 'react'
import image from './assets/Network.jpg'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function NetworlLayer() {
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
                <h1>Network Layer</h1>
            </div>
            <div className="return">
                <button onClick={()=> navigate('/')}>go back to the home page</button>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                The Network Layer is the third layer in the OSI (Open Systems Interconnection) model. It plays a crucial role in the process of end-to-end communication within a network. The primary function of the Network Layer is to route data packets from the source device to the destination device across multiple interconnected networks or subnetworks. <br />
                
                Here are the key responsibilities and features of the Network Layer:

                <ol>
                    <li>
                        <span>Logical Addressing:</span> The Network Layer uses logical addressing, often in the form of an IP (Internet Protocol) address, to uniquely identify devices on a network. IP addresses allow routers and other devices to determine where to send data packets.
                    </li>

                    <li>
                        <span>Routing:</span> Routing is a core function of the Network Layer. Routers, which operate at this layer, use routing tables and algorithms to determine the best path for data packets to reach their destination. They make decisions based on factors like network topology, traffic conditions, and routing metrics.
                    </li>

                    <li>
                        <span>Packet Forwarding:</span> Once a router determines the appropriate path, it forwards data packets to the next hop or router in the network. This process is known as packet forwarding and involves encapsulating data in appropriate headers for the next hop.
                    </li>

                    <li>
                        <span>Subnetting:</span> The Network Layer allows for the division of larger IP address spaces into smaller subnetworks or subnets. This enables efficient addressing and routing within complex networks.
                    </li>

                    <li>
                        <span>Fragmentation and Reassembly:</span> The Network Layer can fragment and reassemble data packets if they are too large to traverse a network segment. This ensures that data can be transmitted across networks with varying Maximum Transmission Unit (MTU) sizes.
                    </li>

                    <li>
                        <span>Error Handling:</span> While the primary responsibility for error detection and correction often lies in the Data Link Layer, the Network Layer may also handle certain types of network-level errors, such as unreachable destinations or network congestion.
                    </li>

                    <li>
                        <span>Traffic Control:</span> The Network Layer can manage traffic by applying Quality of Service (QoS) mechanisms. QoS allows for prioritization of certain types of traffic to ensure critical data, like VoIP or video streaming, gets preferential treatment.
                    </li>

                    <li>
                        <span>Tunneling:</span> The Network Layer can encapsulate data packets within another protocol's headers, a process known as tunneling. This is often used for creating secure connections or connecting networks with different protocols.
                    </li>

                    <li>
                        <span>Address Resolution:</span> The Network Layer may involve address resolution processes, such as ARP (Address Resolution Protocol) in IP networks, to map logical IP addresses to physical MAC (Media Access Control) addresses at the Data Link Layer.
                    </li>
                </ol>

                In summary, the Network Layer is responsible for logical addressing, routing, and forwarding of data packets across networks, making it a crucial part of the OSI model for enabling communication between devices on different network segments. IP (Internet Protocol) is the most common protocol associated with this layer.
            </div>
        </motion.div>
    )
}

export default NetworlLayer
