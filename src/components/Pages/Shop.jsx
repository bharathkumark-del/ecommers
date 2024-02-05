import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import PopularMen from "../Popular/PopularMen"
import PopularKids from '../Popular/PopularKids'
import Offers from '../Offers/Offers'
import NewCollection from '../NewCollections/NewCollection'
import NewsLetter from '../NewsLeetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <PopularMen/>
      <PopularKids/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop