import React from 'react'


class ProductItem extends React.Component{
  componentDidMount(){
    return this.props.fetchSingleProduct(this.props.match.params.id)
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
                <h1>NO REVIEW - PLACEHOLDER</h1>
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
                  <label>Quantity
                  <br />
                  <select name="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                  </select><br />
                  <button className="product-item-buy-now-btn">Buy it now</button><br />
                  <button className="product-item-add-to-cart-btn">Add to cart</button>
                  </label>
                </form>
            </div>
            <div className='product-item-description'>
                <textarea disabled >{product.description}</textarea>
  
              
            </div>
          </section>
      </section>
    )
  }
}

export default ProductItem