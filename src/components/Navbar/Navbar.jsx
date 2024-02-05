import React from 'react'
import "./NavStyle.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const logo="https://www.pngmart.com/files/11/Shopping-PNG-Photos.png"
  const [menu, setmenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className="navLogo">
        <img src={logo} alt="" />
        <p>BigShopping</p>
      </div>
      <ul className="navMenu">
        <li onClick={()=>{setmenu("shop")}}><Link to="/" className='nv'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link to="/mens" className='nv'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link to="/womens" className='nv'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link to="/kids" className='nv'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="navCart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/512/8651/8651580.png" alt="" /></Link>
        <div className="navCartCount">1</div>
      </div>

    </div>
  )
}

export default Navbar