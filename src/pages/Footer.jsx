import React from 'react'
import { FaLinkedin} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import logo from './assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        
        
       <div className="header">
       <h3>Zenith</h3>
       <img src={logo}/>
       </div>
       
      
      <div className="footer-contents">
        <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
        </ul>
      </div>
      <div className="footer-icons">
        <ul>
            <li><FaLinkedin/></li>
            <li><FaTwitter/></li>
            <li><FaInstagram/></li>
        </ul>
    
      </div>
      <div className="disclaimer">
        <h3>Purple Haze Technology 2025 copyright reserved</h3>
      </div>
    </div>
  )
}

export default Footer
