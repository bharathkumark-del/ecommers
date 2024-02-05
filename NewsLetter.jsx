import React from 'react'
import "./NewsLetters.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Events</h1>
        <p>Subscribe to out  newsletter and get the latest updates about our events straight into your inbox.</p>
        <div>
            <input type="email" placeholder='enter email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
