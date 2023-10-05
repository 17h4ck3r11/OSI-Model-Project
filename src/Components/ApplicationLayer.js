import React, { useEffect } from 'react'
import image from './assets/Application.jpg'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function ApplicationLayer() {
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
                <h1>Application Layer</h1>
            </div>
            <div className="return">
                <button onClick={()=> navigate('/')}>go back to the home page</button>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                The Application Layer is the seventh and highest layer in the OSI (Open Systems Interconnection) model. It is the layer closest to the end-user or application software and is responsible for providing network services directly to user applications. The Application Layer is where end-user processes and applications interact with the network and use the underlying network services to exchange data. <br />
                
                Here are the key functions and responsibilities of the Application Layer:

                <ol>
                    <li>
                        <span>User Interface:</span> The Application Layer provides a user interface through which applications and users can interact with the network. This includes graphical user interfaces (GUIs) and command-line interfaces (CLIs).
                    </li>

                    <li>
                        <span>Application Services:</span> It offers a wide range of application-level services that applications can use to perform various tasks. These services include email, file transfer, remote access, web browsing, and more.
                    </li>

                    <li>
                        <span>Application Protocols:</span> The Application Layer defines a set of application protocols that applications can use to communicate over the network. These protocols specify the rules and conventions for data exchange between applications on different devices. Examples of application layer protocols include HTTP for web browsing, SMTP for email, and FTP for file transfer.
                    </li>

                    <li>
                        <span>Data Presentation:</span> The Application Layer is responsible for data presentation and formatting. It ensures that data sent or received by applications is in the correct format and can be understood by the receiving application. This includes tasks like data encryption and decryption.
                    </li>

                    <li>
                        <span>Data Storage and Retrieval:</span> Applications often require the ability to store and retrieve data from remote servers or databases. The Application Layer provides mechanisms for these operations, such as database queries and file transfer.
                    </li>

                    <li>
                        <span>Authentication and Authorization:</span> It handles authentication and authorization processes to verify the identity of users or applications and grant access permissions accordingly. This is essential for security and access control.
                    </li>

                    <li>
                        <span>Session Management:</span> In some cases, the Application Layer is responsible for managing application sessions, which are logical connections between two communicating applications. This includes creating, maintaining, and terminating sessions as needed.
                    </li>

                    <li>
                        <span>Error Handling:</span> The Application Layer may handle error detection and recovery specific to the application. For example, in a file transfer application, it can detect when a file transfer fails and provide options for retransmission.
                    </li>

                    <li>
                        <span>Network Services:</span> Applications can access network services provided by the lower layers of the OSI model (Transport, Network, Data Link, and Physical layers) through the Application Layer. These services include data transport, routing, addressing, and network management.
                    </li>

                    <li>
                        <span>Interoperability:</span> The Application Layer ensures that applications developed on different platforms and using different programming languages can communicate and exchange data seamlessly.
                    </li>
                </ol>

                In summary, the Application Layer is responsible for providing a bridge between the network infrastructure and the end-user applications. It offers a range of services, protocols, and interfaces that enable applications to utilize the network for communication, data exchange, and access to remote resources. This layer plays a crucial role in facilitating communication and data sharing between applications running on different devices across a network.
            </div>
        </motion.div>
    )
}

export default ApplicationLayer
