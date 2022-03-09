import React from 'react'
import { Link } from 'react-router-dom';
import {shuffleArray} from '../../utils/shuffle_products.array'

class ProductMostPopular extends React.Component{
  constructor(props){
    super(props);
  }


  render(){  
    const {products} = this.props
    let productsList = products.length === 0 ? null : shuffleArray(products, 7)

    return( products.length === 0 ? null : 
            <section className="most-popular-wrapper">
                <div className='most-popular-top'>
                    <div className="most-popular-top-left">
                      <h1>Explore Unique Finds</h1>
                    </div>
                    <div className="most-popular-top-right">
                      <i className="fa-solid fa-arrow-trend-up fa-4x"></i>
                    </div>
                </div>
                          
                <div className='most-popular-bottom'>  
                  <div className='most-popular-bottom-left'>
                      <div className="most-popular-inner-box-1 hover-area">
                          <p >{productsList[6].name}</p>
                          
                          <Link to={`/products/${productsList[6].id}`}>
                                  <img src={productsList[6].imageUrl} />      
                          </Link>                      
                          <span className="most-popular-price">${productsList[0].price}</span>
                        <text className="hover-text">{productsList[0].name}</text>
                      </div>
                  </div>

                  <div className='most-popular-bottom-right'>
                    <div className='most-popular-bottom-right-top' >
                        <div className="most-popular-inner-boxes most-popular-inner-box-images hover-area">
                            
                            <Link to={`/products/${productsList[0].id}`}>
                                    <img src={productsList[0].imageUrl} />      
                            </Link>       
                            <p >{productsList[0].name}</p>               
                            <span className="most-popular-price">${productsList[0].price}</span>
                            <text className="hover-text">{productsList[0].name}</text>
                        </div>
                          
                        <div className="most-popular-inner-boxes most-popular-inner-box-images hover-area">
                            <Link to={`/products/${productsList[1].id}`}>
                              <img src={productsList[1].imageUrl}  />
                            </Link>
                            <p >{productsList[1].name}</p>   
                            <span className="most-popular-price">${productsList[1].price}</span>
                            <text className="hover-text">{productsList[1].name}</text>
                        </div>

                        <div className="most-popular-inner-boxes most-popular-inner-box-images hover-area">
                            <Link to={`/products/${productsList[2].id}`}>
                              <img src={productsList[2].imageUrl}  />
                            </Link>
                            <p >{productsList[2].name}</p>   
                              <span className="most-popular-price">${productsList[2].price}</span>
                              <text className="hover-text">{productsList[2].name}</text>
                        </div>
                    </div>

                    <div className='most-popular-bottom-right-bottom'>
                      <div className="most-popular-inner-boxes most-popular-inner-box-images hover-area">
                          <Link to={`/products/${products[3].id}`}>
                            <img src={products[3].imageUrl}  />
                          </Link>
                          <p >{productsList[3].name}</p>   
                          <span className="most-popular-price">${products[3].price}</span>
                          <text className="hover-text">{productsList[3].name}</text>
                      </div>

                      <div className="most-popular-inner-boxes most-popular-inner-box-images hover-area" >
                          <Link to={`/products/${products[4].id}`}>
                            <img src={products[4].imageUrl}  />
                          </Link>
                          <p >{productsList[4].name}</p>   
                          <span className="most-popular-price">${products[4].price}</span> 
                          <text className="hover-text">{productsList[4].name}</text>
                      </div>

                      <div className="most-popular-inner-boxes most-popular-inner-box-images hover-area">
                          <Link to={`/products/${products[5].id}`}>
                            <img src={products[5].imageUrl}  />
                            </Link>
                            <p >{productsList[5].name}</p>   
                        <span className="most-popular-price">${products[5].price}</span> 
                        <text className="hover-text">{productsList[5].name}</text>
                      </div> 

                      
                    </div>
                    </div>       
                  </div>
                
            </section>
    )
  }
}

export default ProductMostPopular