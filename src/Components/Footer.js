import React from 'react'
import logo from './assets/logo.jpg'
import instagram from './assets/instagram.webp'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="side">
          <div className="social-icons">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
          <span>Designed with &#x2665; by <a href='https://17h4ck3r11-portfolio.netlify.app/' style={{fontWeight:700}}>Amit Kumar Gupta</a></span>
        </div>
      </footer>
    </>
  )
}

export default Footer
