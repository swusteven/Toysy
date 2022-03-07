import React from 'react'
import { render } from 'react-dom'

class CartIndex extends React.Component{

  componentDidMount(){
    if (this.props.currentUser){
    return this.props.fetchAllCartItems(this.props.currentUser.id)
    }
  }


  render(){
    const { cart, products } = this.props
debugger
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