import React, { useContext } from 'react'
import "./css/ShopCatagory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdownicon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shopcategory'>
      <img className='shopcategorybanner' src={props.banner} alt="" />
      <div className="shopCategoryIndex">
        <p>
          <span>Showing 1-12</span>  out of 36 products
        </p>
        <div className="shopCategorySort">
          Sort by <img src={dropdownicon} alt="" />
        </div>
      </div>
      <div className="shopcategoryproduct">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />

          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategoryloadmore">
        Explore more

      </div>
    </div>
  )
}

export default ShopCatagory