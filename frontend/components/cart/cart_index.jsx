import React from 'react'
import { render } from 'react-dom'
import {createCart} from "../../utils/cart"

class CartIndex extends React.Component{
  constructor(props){
    super(props);
  }


  componentDidMount(){  
    if (this.props.currentUser){
    return this.props.fetchAllCartItems(this.props.currentUser.id)
    }
  }

  render(){
    const { cart, products } = this.props
    return(
      <>
        {cart.length === 0 ? null : 
          cart.map((item, idx) =>{
            return <li key={idx}> Name: {item.name}  quantity: {item.quantity}</li>
          })

        }      
      
      </>
    )
  }
}


export default CartIndex