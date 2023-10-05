import React, { useEffect } from 'react'
import image from './assets/Presentation.jpg'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function PresentationLayer() {
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
                <h1>Presentation Layer</h1>
            </div>
            <div className="return">
                <button onClick={()=> navigate('/')}>go back to the home page</button>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                The Presentation Layer is the sixth layer in the OSI (Open Systems Interconnection) model, positioned between the Session Layer (Layer 5) and the Application Layer (Layer 7). This layer is primarily responsible for data translation, encryption, compression, and ensuring that data from the Application Layer is presented in a format that can be easily understood by the receiving device or application. <br />
                
                Here are the key functions and responsibilities of the Presentation Layer:

                <ol>
                    <li>
                        <span>Data Translation:</span> The Presentation Layer handles data format and character encoding conversions. It ensures that data sent by one device or application can be correctly interpreted by the receiving device, even if they use different encoding schemes or data formats.
                    </li>

                    <li>
                        <span>Encryption and Decryption:</span> It provides encryption and decryption services to secure the data during transmission. This is particularly crucial for sensitive information like passwords, credit card numbers, and confidential documents.
                    </li>

                    <li>
                        <span>Data Compression:</span> The Presentation Layer can compress data before transmission to reduce bandwidth usage and improve network efficiency. At the receiving end, it decompresses the data for use by the application.
                    </li>

                    <li>
                        <span>Data Syntax Conversion:</span> In cases where different systems or applications use different data syntaxes or protocols, the Presentation Layer can translate the data from one syntax to another.
                    </li>

                    <li>
                        <span>Data Encryption:</span> It offers mechanisms for data encryption to protect the confidentiality of data during transmission. Common encryption protocols, such as SSL/TLS, operate at this layer.
                    </li>

                    <li>
                        <span>Character Code Translation:</span> This layer manages character encoding and translation between different character sets, ensuring that special characters and symbols are correctly interpreted.
                    </li>
                    
                    <li>
                        <span>Data Formatting:</span> The Presentation Layer can format data for display purposes. For example, it can convert raw data into a format suitable for presentation in a user interface or a report.
                    </li>
                    <li>
                        <span>MIME Encoding:</span> In the context of email and web communication, the Presentation Layer handles the encoding of multimedia data, such as images and attachments, using MIME (Multipurpose Internet Mail Extensions) encoding.
                    </li>
                    <li>
                        <span>Data Integrity Checking:</span> In some cases, the Presentation Layer may perform additional checks for data integrity, such as verifying digital signatures on encrypted data.
                    </li>

                    <li>
                        <span>Protocol Conversion:</span> It can convert data between different communication protocols or standards, ensuring compatibility between systems that use different protocols.
                    </li>
                </ol>
                
                Overall, the Presentation Layer serves as an intermediary between the Application Layer and the lower layers of the OSI model. It focuses on ensuring that data is in the appropriate format for communication and, if needed, adding security and compression measures to facilitate effective data exchange between devices and applications.
            </div>
        </motion.div>
    )
}

export default PresentationLayer
