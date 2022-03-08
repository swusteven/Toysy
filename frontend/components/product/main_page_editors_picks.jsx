import React from 'react'
import { Link } from 'react-router-dom';
import {shuffleArray} from '../../utils/shuffle_products.array'

class ProductEditorsPicks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){  
    const {products} = this.props
    let productsList = products.length === 0 ? null : shuffleArray(products, 6)

    return( products.length === 0 ? null : 
            <section className="editors-pick-wrapper">
                <div className='editors-pick-top'>

                <div className="editors-pick-inner-box-1">
                    <p>Editors’ Picks</p>
                    <h1>Made with love</h1>
                    <h3>Shop these unique finds <i className="fa-solid fa-arrow-right"></i></h3>
                </div>

                <div className="editors-pick-inner-box-2 editors-pick-inner-box-images">
                    <Link to={`/products/${productsList[0].id}`}>
                            <img src={productsList[0].imageUrl} />      
                    </Link>                      
                    <span className="editors-pick-price">${productsList[0].price}</span>
                </div>
                  
                <div className="editors-pick-inner-box-3 editors-pick-inner-box-images">
                    <Link to={`/products/${productsList[1].id}`}>
                      <img src={productsList[1].imageUrl}  />
                    </Link>
                    <span className="editors-pick-price">${productsList[1].price}</span>
                </div>

                <div className="editors-pick-inner-box-4 editors-pick-inner-box-images">
                    <Link to={`/products/${productsList[2].id}`}>
                      <img src={productsList[2].imageUrl}  />
                    </Link>
                      <span className="editors-pick-price">${productsList[2].price}</span>
                  </div>
                </div>


        
                <div className='editors-pick-bottom'>    
                    <div className="editors-pick-inner-box-5 editors-pick-inner-box-images">
                        <Link to={`/products/${products[3].id}`}>
                          <img src={products[3].imageUrl}  />
                        </Link>
                        <span className="editors-pick-price">${products[3].price}</span>
                    </div>

                    <div className="editors-pick-inner-box-6 editors-pick-inner-box-images" >
                         <Link to={`/products/${products[4].id}`}>
                          <img src={products[4].imageUrl}  />
                        </Link>
                        <span className="editors-pick-price">${products[4].price}</span> 
                    </div>

                    <div className="editors-pick-inner-box-7 editors-pick-inner-box-images">
                         <Link to={`/products/${products[5].id}`}>
                          <img src={products[5].imageUrl}  />
                          </Link>
                      <span className="editors-pick-price">${products[5].price}</span> 
                    </div> 
                    <div className="editors-pick-inner-box-8">
                      Express yourself in love with a collection of one-of-a-kind baby toys, games, learning, dolls and more</div>        
                </div>
            </section>
    )
  }
}

export default ProductEditorsPicks