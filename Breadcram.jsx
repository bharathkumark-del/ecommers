import React from 'react'
import "./Breadcram.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breadcram = (props) => {
    const {product} = props
  return (
    <div className='breadcram'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcram