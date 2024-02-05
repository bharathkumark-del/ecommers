import React, { useContext } from 'react'

import { useParams } from 'react-router-dom'
import Breadcram from '../components/Breadcrams/Breadcram'
import ProductDisplays from '../components/ProductDisplay/ProductDisplays'
import { ShopContext } from '../Context/ShopContext'


const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {ProductId}= useParams();
  const product = all_product.find((e)=> e.id === Number(ProductId))
  return (
    <div>
      <Breadcram product={product}/>
      <ProductDisplays/>
    </div>
  )
}

export default Product