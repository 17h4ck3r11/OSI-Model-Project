import React, { useEffect } from 'react'
import image from './assets/Session.jpg'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function SessionLayer() {
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
                <h1>Session Layer</h1>
            </div>
            <div className="return">
                <button onClick={()=> navigate('/')}>go back to the home page</button>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                The Session Layer is the fifth layer in the OSI (Open Systems Interconnection) model, positioned between the Transport Layer (Layer 4) and the Presentation Layer (Layer 6). This layer plays a crucial role in establishing, maintaining, and terminating communication sessions between two devices or applications across a network. A session, in this context, refers to a period of interaction or data exchange between two entities. <br />
                
                Here are the primary functions and responsibilities of the Session Layer:
                
                <ol>
                    <li>
                        <span>Session Establishment:</span> The Session Layer is responsible for setting up and initiating communication sessions between devices. This includes tasks such as authentication and authorization to ensure that the participating entities have the necessary permissions to establish a session.
                    </li>

                    <li>
                        <span>Session Maintenance:</span> Once a session is established, this layer ensures its continuous and reliable operation. It handles tasks like session re-establishment in case of connection interruptions or failures.
                    </li>

                    <li>
                        <span>Synchronization:</span> The Session Layer manages synchronization points within a data stream, allowing devices to stay in sync during data exchange. This is essential for ensuring data integrity and consistency.
                    </li>
                    <li>
                        <span>Dialog Control:</span> It controls the dialog or conversation between the devices or applications. This means that it manages which entity can send data at a given time, ensuring orderly and meaningful communication.
                    </li>

                    <li>
                        <span>Token Management:</span> In some network protocols, token-based access control is used to manage access to the communication channel. The Session Layer can handle token management to regulate which entity has the right to transmit data.
                    </li>

                    <li>
                        <span>Session Termination:</span> When the communication session is complete, the Session Layer handles the graceful termination of the session, ensuring that all resources are released and that the session ends correctly.
                    </li>

                    <li>
                        <span>Checkpointing:</span> In the event of a network failure or interruption, the Session Layer can perform checkpointing, allowing a session to be resumed from a specific point rather than starting from the beginning.
                    </li>

                    <li>
                        <span>Session Identification:</span> It assigns unique session identifiers or tags to each session to distinguish and manage multiple concurrent sessions.
                    </li>

                    <li>
                        <span>Session Recovery:</span> If a session is interrupted or terminated prematurely due to network issues or device failure, the Session Layer can facilitate session recovery by re-establishing the connection.
                    </li>

                    <li>
                        <span>Security:</span> The Session Layer may implement security measures such as encryption, data integrity checks, and access control to protect the confidentiality and integrity of the data exchanged during the session.
                    </li>
                </ol>

                Overall, the Session Layer is responsible for managing the setup, maintenance, and termination of communication sessions, ensuring that data exchange between devices or applications occurs in an orderly and controlled manner. It plays a crucial role in ensuring reliable and secure communication over a network.
            </div>
        </motion.div>
    )
}

export default SessionLayer
