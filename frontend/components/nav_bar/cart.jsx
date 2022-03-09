import React from 'react'
import { Link } from 'react-router-dom'


class Cart extends React.Component{  
  componentDidUpdate(prevProps, prevState){
    const {currentUser} = this.props
    debugger
    if (currentUser){
      debugger
      if (!prevProps.currentUser && currentUser){
        debugger
        this.props.fetchAllCartItemsforUser(currentUser.id)
      }
    }
  }

  render(){
      const {cart, currentUser} = this.props
    return (
      <>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping fa-2x"></i></Link>
        <span className="cartQuantity" >{Object.keys(cart).length}</span>
      </>
    )
  }
}

export default Cart