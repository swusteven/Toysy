import React from 'react'
import { Link } from 'react-router-dom';


class CartIndex extends React.Component{
  constructor(props){
    super(props);
    this.handleRemoveSingleItem = this.handleRemoveSingleItem.bind(this)
    this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleRemoveAllItems = this.handleRemoveAllItems.bind(this)
  }

  componentDidMount(){  
    if (this.props.currentUser){
    return this.props.fetchAllCartItems(this.props.currentUser.id)
    }
    window.scrollTo(0, 0)   //scroll to the top of the page
  }

  calculateTotalAmount(cart){
    let total = null;
    Object.values(cart).forEach(item => {
      total = total + Number(((Number(item.quantity) * Number(item.price))))
    })
    return total ? total.toFixed(2) : 0
  }

  handleRemoveSingleItem(cartItemId){
    return (e) => {
      e.preventDefault()
      this.props.removeSingleItemInCartItem(cartItemId)
    }
  }

  
  handleUpdateQuantity(itemId){
    return (e) => {
      const cartItem = {"quantity": e.currentTarget.value};
     this.props.updateItemInCartItem(itemId, cartItem) 
    }
  }

  handleOrder(e){
    e.preventDefault();
    const {cart, currentUser, postItemsToOrderItem}= this.props;
    postItemsToOrderItem(currentUser.id, cart)
      .then(()=> this.props.removeAllItemsInCartItem(this.props.cartId))
      .then(()=> this.props.history.push('/orders'))
      
  }

  handleRemoveAllItems(e){
    e.preventDefault()
    debugger
    this.props.removeAllItemsInCartItem(this.props.cartId)
  }

  render(){
    const { cart, products } = this.props
    return(
      <div className="cart-index-page">
        <div className="cart-item-message">
          <h1>{Object.values(cart).length} items in your cart</h1>
          <span><Link to="/" style={{ textDecoration: 'none', color: 'black' }} >Keep Shopping</Link></span>
        </div>

         <div className="cart-index-wrapper">
       
            <section className="cart-index-left">
            {cart.length === 0 ? null : <button class="cart-index-remove-all-items" type="submit" onClick={this.handleRemoveAllItems}> REMOVE ALL ITEMS </button> }
            {cart.length === 0 ? null : 
              cart.map((item) =>{
                return <div className="cart-index-item-wrapper" key={item.name}>
                        
                        <p className='cart-index-item-seller'>
                          <i className="fa-solid fa-store fa-lg"></i>   
                          {item.seller}'s store
                        </p>

                        <div className="cart-index-item-info-wrapper">
                          <section className="cart-index-item-image">
            
                            <Link to={`products/${item.product_id}`}><img src={item.imageUrl}/></Link>
                          </section>

                          <section className="cart_index-item-details">
                            <h3>{item.name}</h3><br />
                            <button className="cart-index-item-remove-btn"type='submit' onClick={this.handleRemoveSingleItem(item.id)}>Remove</button>
                          </section>


                          <section className="cart_index-item-quantity">
                            <form>
                                <select name="quantity"
                                        defaultValue={item.quantity}
                                        onChange={this.handleUpdateQuantity(item.id)} 
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>         
                              </form>
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

            {cart.length === 0 ? null : 
            <section className="cart-index-right-payment">
                    <h1>How you'll pay</h1>
                  <section className='cart-index-cards'>
                    <form>

                      <input type="radio" name="checkout-payment" id="visa" checked/>
                        <label htmlFor="visa"><img className="checkout-payment-icons" src={window.visaIcon} /></label><br />
                      
                      <input type="radio" name="checkout-payment" id="AE" />
                        <label htmlFor="AE"><img className="checkout-payment-icons" src={window.aeIcon} /></label><br />
                      
                        
                      <input type="radio" name="checkout-payment" id="paypal" />
                        <label htmlFor="paypal"><img className="checkout-payment-icons" src={window.paypalIcon} /></label><br />
                      
                      <input type="radio" name="checkout-payment" id="bitcoin" />
                        <label htmlFor="bitcoin"><img className="checkout-payment-icons" src={window.bitcoinIcon} /></label><br />
                      
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
                    <button type="submit" onClick={this.handleOrder} className='cart-index-checkout-btn'>Submit Order</button>
                  </section>

            </section>      
            }
         </div>
    </div>
    )
  }
}


export default CartIndex