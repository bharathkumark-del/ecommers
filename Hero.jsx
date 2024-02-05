import React from 'react'
import "./Heros.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
const Hero = () => {
    const hero_img = "https://freepngimg.com/thumb/shopping/7-2-shopping-png-hd.png"
    return (
        <div className='hero'>
            <div className="heroLeft">
                <h2>New Arrivals Only</h2>
                <div className="heroHandIcon">
                    <p>NEW</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
                <div className="heroLatestBtn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="" />

                </div>
            </div>

            <div className="heroRight">
                <img src={hero_img} alt="" />
            </div>

        </div>
    )
}
export default Hero