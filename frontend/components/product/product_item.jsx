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
    
    window.scrollTo(0, 0)   //scroll to the top of the page
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
    const {product} = this.props    //:id, :name, :description, :price, :quantity, :category, :seller_id: :imageUrl :seller
    return(  !product ? null : 
        <section className="product-item-wrapper">
          <section className="product-item-left">

            <div className='product-item-gallery'>
                <img src={product.imageUrl} />
            </div>

            <div className='product-item-reviews'>
               <ReviewsContainer product={product}/><br />
               <PostReviewContainer product={product}/>
            </div>
          </section>

          <section className="product-item-right">
            <div className='product-item-details'>
                <h1 className="product-item-seller-name">{product.seller.fname}'s store</h1>
                <h1 className="product-item-name">{product.name}</h1>
                <h1 className="product-item-price">${product.price}</h1>
            </div>

            <div className='product-item-purchase-btns'>
                <form>
                  <label >Quantity<br />
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
            <p className="product-items-handling"><i className="fa-solid fa-gift fa-2x" ></i>  Gift wrapping available</p><br />
      
            <div className='product-item-description'>
                <p>Description</p>
                <textarea disabled rows="20" cols="50" id="aboutDescription" value={product.description} />
            </div>

            <div className="product-item-shipping">
              <h1>Shipping Details</h1>
              <p>Estimated arrival</p>
                <div>
                  <div className="product-items-shipping-top">
                    <div><i className="fa-solid fa-cart-shopping"></i></div>
                          <span>--------------</span>
                    <div><i className="fa-solid fa-truck-fast  "></i></div>  
                          <span>--------------</span>
                    <div><i className="fa-solid fa-gift"></i></div> 
                  </div><br />

               
                  <div className="product-items-shipping-center">
                    <h3>Mar 4</h3>
                          <span>--------------</span>
                    <h3>Mar 18-25</h3>  
                         <span>---------------</span>
                    <h3>Mar 31-Apr 15</h3> 
                  </div><br />

                  <div className="product-items-shipping-bottom">
                    <h3>Order placed</h3>
                          <span>--------------</span>
                    <h3>Order ships</h3>  
                         <span>---------------</span>
                    <h3>Delivered!</h3> 
                  </div>



                </div>
                
                    
              

            </div>

          </section>


      </section>
    )
  }
}

export default ProductItem