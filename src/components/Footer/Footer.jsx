import React from 'react'
import "./Fotters.css"
import footerLogo from "../Assets/logoo.png"
import insta from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src={footerLogo} alt="" />
            <p>BigShopping</p>
        </div>
        <ul className="footerLinks">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footerSocialIcon">
            <div className="footerItemContainr">
                <img src={insta} alt="" />
            </div>
            <div className="footerItemContainr">
                <img src={pintester} alt="" />
            </div>
            <div className="footerItemContainr">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footerCopyright">
            <hr />
            <span>&copy;2023 BigShopping. All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer