import React from 'react'
import "./Items.css"
import { Link } from "react-router-dom"



const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link>
    

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