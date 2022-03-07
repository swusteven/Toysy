import React from 'react'
import { render } from 'react-dom'

class CartIndex extends React.Component{

  componentDidMount(){
    this.props.fetchAllCartItems(this.props.currentUser.id)
  }


  render(){
    const { cart, products } = this.props
debugger
    return(
      <>
        {cart.length === 0 ? null : 
          cart.map((item, idx) =>{
            return <li key={idx}> <img src={item.imageUrl} alt="" /> Name: {item.name}  quantity: {item.quantity}</li>
          })

        }      
      
      </>
    )
  }
}


export default CartIndex