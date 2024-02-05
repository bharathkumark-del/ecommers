import React from 'react'
import "./Offerss.css"
import exclusiveImage from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>

        <div className="offersLeft">
            <h1>Exclusive</h1>
            <h1>Only On Best Sellees Products</h1>
            <button>Check Now</button>
        </div>
        <div className="offersRiht">
            <img src={exclusiveImage} alt="" />
        </div>
    </div>
  )
}

export default Offers