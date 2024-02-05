import React from 'react'
import dataProduct from "../Assets/KidsData"
import "./Popular.css"
import Item from "../Item/Item"

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Kids</h1>
      <hr />
      <div className="popularItem">
        {dataProduct.map((item, i) => {
          return <Item  id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular