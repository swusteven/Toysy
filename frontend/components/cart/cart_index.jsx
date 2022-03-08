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

  calculateTotalAmount(cart){
    let total = null;

    Object.values(cart).forEach(item => {
      total = total + Number(((Number(item.quantity) * Number(item.price))).toFixed(2))
    })

    return total
  }

  render(){
    const { cart, products } = this.props

    return(
      <div className="cart-index-page">
        <div className="cart-item-message">
          <h1>{Object.values(cart).length} items in your cart</h1>
          <span><Link to="/" style={{ textDecoration: 'none' }} >Keep Shopping</Link></span>
        </div>

         <div className="cart-index-wrapper">
       
            <section className="cart-index-left">
            {cart.length === 0 ? null : 
              cart.map((item) =>{
                return <div className="cart-index-item-wrapper" key={item.name}>

                        <p className='cart-index-item-seller'>
                          <i className="fa-solid fa-store fa-lg"></i>   
                          {item.seller}'s store
                        </p>

                        <div className="cart-index-item-info-wrapper">
                          <section className="cart-index-item-image">
                            <img src={item.imageUrl}/>
                          </section>
                          <section className="cart_index-item-details">
                            <h3>{item.name}</h3><br />
                            <h1>Remove</h1>
                          </section>
                          <section className="cart_index-item-quantity">
                            <h3>Quantity: {item.quantity}</h3>
                          </section>
                          <section className="cart_index-item-amount">
                            <h2>${(item.quantity * item.price).toFixed(2)}</h2>
                            <h3>${item.price} each</h3>
                          </section>
                        </div>             
                      </div>
              })
            }
            </section>

            <section className="cart-index-right-payment">
                  <section className='cart-index-cards'>
                    <h1>How you'll pay</h1>
                    <form>
                      <input type="radio" name="checkout-payment" id="visa" />
                      <label htmlFor="visa">Visa</label><br />
                      <input type="radio" name="checkout-payment" id="master" />
                      <label htmlFor="master">Master</label><br />
                      <input type="radio" name="checkout-payment" id="paypal" />
                      <label htmlFor="paypal">Paypal</label><br />
                      <input type="radio" name="checkout-payment" id="klarna" />
                      <label htmlFor="klarna">Klarna</label><br />
                    </form>
                  </section>

                  <section className='cart-index-total-amount'>
                      <div className='cart-iden-total-inner'>
                          <p>Item(s) total</p>
                          <p>$ {this.calculateTotalAmount(cart)}</p>
                      </div>

                      <div className='cart-iden-total-inner'>
                          <p>Shipping</p>
                          <p>$ 0</p>
                      </div>

                      <div className='cart-iden-total-inner'>
                          <p>Total {Object.values(cart).length} item(s)</p>
                          <p>$ {this.calculateTotalAmount(cart)}</p>
                      </div>
                                         
                  </section>

                  <section className='cart-index-checkout-btn-section'>
                    <button className='cart-index-checkout-btn'>Proceed to checkout</button>
                  </section>

            </section>      
      
         </div>
    </div>
    )
  }
}


export default CartIndex