import React from 'react'
import { Link } from 'react-router-dom';
import {shuffleArray} from '../../utils/shuffle_products.array'

class ProductMostPopular extends React.Component{
  constructor(props){
    super(props);
  }


  render(){  
    const {products} = this.props
    let productsCopy = Array.from(products.slice(1))
    let productsList = (products.length === 0 ? null : shuffleArray(productsCopy, 7))

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
                      <Link to={`/products/${products[1].id}`}>
                            <p >{products[1].name}</p>
                            <h2 className="most-popular-price-left">${products[1].price}</h2>
                            <div className="most-popular-bottom-left-image-container">
                                <img className="most-popular-bottom-left-image" src={products[1].imageUrl} />        
                            </div>                            
                        </Link>                  
                  </div>



                

                  <div className='most-popular-bottom-right'>
                    <div className='most-popular-bottom-right-top' >
                        <div className="most-popular-inner-boxes most-popular-inner-box-images">
                            <Link to={`/products/${productsList[0].id}`}>
                                  <img src={productsList[0].imageUrl} />          
                                  <p >{productsList[0].name}</p>               
                                  <span className="most-popular-price">${productsList[0].price}</span>
                            </Link>    
                        </div>
                          
                        <div className="most-popular-inner-boxes most-popular-inner-box-images">
                            <Link to={`/products/${productsList[1].id}`}>
                              <img src={productsList[1].imageUrl}  />
                            <p >{productsList[1].name}</p>   
                            <span className="most-popular-price">${productsList[1].price}</span>
                            </Link>
                        </div>

                        <div className="most-popular-inner-boxes most-popular-inner-box-images">
                            <Link to={`/products/${productsList[2].id}`}>
                              <img src={productsList[2].imageUrl}  />
                              <p >{productsList[2].name}</p>   
                              <span className="most-popular-price">${productsList[2].price}</span>
                            </Link>
                        </div>
                    </div>

                    <div className='most-popular-bottom-right-bottom'>
                      <div className="most-popular-inner-boxes most-popular-inner-box-images">
                          <Link to={`/products/${products[3].id}`}>
                            <img src={products[3].imageUrl}  />
                            <p>{productsList[3].name}</p>   
                            <span className="most-popular-price">${products[3].price}</span>
                          </Link>
                      </div>

                      <div className="most-popular-inner-boxes most-popular-inner-box-images" >
                          <Link to={`/products/${products[4].id}`}>
                            <img src={products[4].imageUrl}  />
                            <p>{productsList[4].name}</p>   
                            <span className="most-popular-price">${products[4].price}</span> 
                          </Link>
                      </div>

                      <div className="most-popular-inner-boxes most-popular-inner-box-images">
                          <Link to={`/products/${products[5].id}`}>
                            <img src={products[5].imageUrl}  />
                            <p>{productsList[5].name}</p>   
                            <span className="most-popular-price">${products[5].price}</span> 
                          </Link>
                      </div> 

                    </div>
                    </div>       
                  </div>
                
            </section>
    )
  }
}

export default ProductMostPopular