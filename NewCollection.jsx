import React from 'react'
import New_collectons from "../Assets/new_collections"
import Item from '../Item/Item'
import "./NewCollection.css"

const NewCollection = () => {
  return (
    <div className='newcollections'>
        <h1>New Collection</h1>
        <hr />
        <div className="collections">
        {New_collectons.map((item,i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}

        </div>
    </div>
  )
}

export default NewCollection