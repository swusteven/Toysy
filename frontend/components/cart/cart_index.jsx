import React from 'react'
import { Link } from 'react-router-dom';

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
      <div className="cart-index-page">
        <div>
          <h1>{Object.values(cart).length} items in your cart</h1>
          <span><Link to="/" style={{ textDecoration: 'none' }} >Keep Shopping</Link></span>
        </div>

         <div className="cart-index-wrapper">
       
            <section className="cart-index-left">
            {cart.length === 0 ? null : 
              cart.map((item) =>{
                return <div className="cart-index-item-wrapper" key={item.name}>
                    <div className="cart_index-item-image">
                        <img src={item.imageUrl}/>
                    </div>
                    <div classname="cart_index-item-details">
                        <h3>{item.name}</h3>
                    </div>
                   quantity: {item.quantity}
                
                              
                </div>
              })

            }

            </section>

            <section className="cart-index-right-payment">
                  <h1>payment section goes here</h1>
            </section>      
      
         </div>
    </div>
    )
  }
}


export default CartIndex