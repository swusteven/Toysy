import React from 'react';
import ReviewsContainer from '../review/reviews_index_container'
import PostReviewContainer from '../review/post_review_container';

class ProductItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.cartDetails
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleBuyItNow = this.handleBuyItNow.bind(this)
  }

  componentDidMount(){
    this.props.fetchSingleProduct(this.props.match.params.id)
    if (this.props.currentUser){
      this.props.fetchAllCartItemsforUser(this.props.currentUser.id)      
    }
    
    if (this.props.currentUser){
      this.props.fetchOrders(this.props.currentUser.id)
    }
    window.scrollTo(0, 0)   //scroll to the top of the page
  } 

  componentWillUnmount(){
    this.props.clearOrderHistoryCheckout()
  }
  
  handleUpdate(){
    return (e) => this.setState({["quantity"]: e.currentTarget.value})
  }

  handleAddToCart(e){
    e.preventDefault();
    const {currentUser, cartItems} = this.props 

    if (currentUser){
      if (!!cartItems[this.state.product_id]){
        let data = Object.assign({}, cartItems[this.state.product_id]);     
        data['quantity'] = (parseInt(data.quantity) + parseInt(this.state.quantity));
    
         this.props.updateItemInCartItem(cartItems[this.state.product_id].id, data)
          .then(()=>this.props.history.push('/cart'))        
      } else {
        this.props.postItemToCartItem(this.state)
          .then(()=>this.props.history.push('/cart'))        
      }
    } else {
        this.props.history.push('/login')
    }
  }

  handleBuyItNow(e){
    e.preventDefault()
    const {currentUser, product, postItemsToOrderItem} = this.props 
    if (currentUser){
      let data = [{'quantity': this.state.quantity, 'product_id': product.id, 'price': product.price}]
      postItemsToOrderItem(currentUser.id, data)
      .then(()=> this.props.history.push('/orders'))
    } else {
        this.props.history.push('/login')
    }  
  }

  render(){
    const {product, showReviewBox} = this.props    //:id, :name, :description, :price, :quantity, :category, :seller_id: :imageUrl :seller
    return(  !product ? null : 
        <section className="product-item-wrapper">
          <section className="product-item-left">

            <div className='product-item-gallery'>
                <img src={product.imageUrl} />
            </div>

            <div className='product-item-reviews'>
               {showReviewBox ? <PostReviewContainer product={product}/> : null}
               <br />
               <ReviewsContainer product={product}/>
            </div>
          </section>

          <section className="product-item-right">
            <div className='product-item-details'>
                <h1 className="product-item-seller-name"> <i className="fa-solid fa-store fa-2x"></i> {product.seller.fname}'s store</h1>
                <h1 className="product-item-name">{product.name}</h1>
                <h1 className="product-item-price">${product.price}</h1>
            </div>

            <div className='product-item-purchase-btns'>
                <form>
                  <label >Quantity:<br />
                  <select name="quantity"
                          onChange={this.handleUpdate()} 
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
                  </label><br />

                  
                  <button type='submit' onClick={this.handleBuyItNow} className="product-item-buy-now-btn">Buy it now</button><br />
                  <button type='submit' onClick={this.handleAddToCart} className="product-item-add-to-cart-btn">Add to cart</button>                
                </form>
            </div>
            <p className="product-items-handling" ><i className="fa-solid fa-truck-fast fa-2x"></i> <span>Hooray!</span> This item ships free to the US.</p><br />
            <br />
            <p className="product-items-handling"><i className="fa-solid fa-gift fa-2x" ></i>  Gift wrapping available</p><br />
      
            <div className='product-item-description'>
                <p>Description:</p>
                <textarea disabled rows="20" cols="50" id="aboutDescription" value={product.description} />
            </div>
          </section>
      </section>
    )
  }
}

export default ProductItem