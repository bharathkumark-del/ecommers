import React from 'react'
import dataProduct from "../Assets/MenData"
import "./Popular.css"
import Item from "../Item/Item"

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Men</h1>
      <hr />
      <div className="popularItem">
        {dataProduct.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular