import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart, currentUser}) =>{
  debugger
    return (
      <>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping fa-2x"></i></Link>
        <span className="cartQuantity" >{Object.keys(cart).length}</span>
      
      </>
    )
}

export default Cart