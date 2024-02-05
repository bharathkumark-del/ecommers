import React from 'react'
import "./Items.css"



const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
       
        <p>{props.name}</p>
        <div className="itemPrices">
            <div className="itemPriceNew">
                {props.newPrice}Rs/
            </div>
            <div className="itemPriceOld">
                {props.oldPrice}Rs/
            </div>
        </div>
    </div>
  )
}

export default Item