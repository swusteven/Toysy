import React from 'react'


class ProductItem extends React.Component{
  componentDidMount(){
    debugger
    return this.props.fetchSingleProduct(this.props.match.params.id)
  }  


  render(){ 
    //:id, :name, :description, :price, :quantity, :category, :seller_id: :imageUrl
    const {product} = this.props
debugger //2
    const display = () =>{
      return<section className="product-item-wrapper">
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
                      {/* <h1 className="seller-name">{product.seller.fname}'s store</h1> */}
                      <h1>{product.name}</h1>
                      <h3>{product.price}</h3>
                  </div>

                  <div className='product-item-purchase-btns'>
                      <form>
                        <label>Quantity
                        <select name="quantity">
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        </label>
                      </form>
                  </div>
                  <div className='product-item-description'>
                
                      <textarea>{product.description}</textarea>
                    
                  </div>
                </section>
      </section>
    }
    
    return (Object.keys(product).length !== 0 ? display() : null)
  }
}

export default ProductItem