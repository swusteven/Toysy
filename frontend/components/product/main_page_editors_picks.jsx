import React from 'react'
import { Link } from 'react-router-dom';

class ProductEditorsPicks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){  
    const {products} = this.props
    
    return( products.length === 0 ? null :
            <section className="editors-pick-wrapper">
                <div className='editors-pick-top'>
                  <div className="editors-pick-inner-box-1">
                    <p>Editors’ Picks</p>
                    <h1>Made with love</h1>
                    <h3>Shop these unique finds <i className="fa-solid fa-arrow-right"></i></h3>
                </div>

                <div className="editors-pick-inner-box-2 editors-pick-inner-box-images">
                    <Link to={`/products/${products[0].id}`}>
                            <img src={products[0].imageUrl} alt="" />      
                    </Link>                      
                    <span className="editors-pick-price">$20.99</span>
                </div>
                  
                <div className="editors-pick-inner-box-3 editors-pick-inner-box-images">
                    <Link to={`/products/${products[1].id}`}>
                      <img src={products[1].imageUrl}  alt="" />
                    </Link>
                    <span className="editors-pick-price">$220.99</span>
                </div>

                <div className="editors-pick-inner-box-4 editors-pick-inner-box-images">
                    <Link to={`/products/${products[2].id}`}>
                      <img src={products[2].imageUrl}  alt="" />
                    </Link>
                      <span className="editors-pick-price">$9.99</span>
                  </div>
                </div>
        
                <div className='editors-pick-bottom'>    
                    <div className="editors-pick-inner-box-5 editors-pick-inner-box-images">
                        <Link to={`/products/${products[3].id}`}>
                          <img src={products[3].imageUrl}  alt="" />
                        </Link>
                        <span className="editors-pick-price">$40.99</span>
                    </div>

                    <div className="editors-pick-inner-box-6 editors-pick-inner-box-images" >
                         <Link to={`/products/${products[4].id}`}>
                          <img src={products[4].imageUrl}  alt="" />
                        </Link>
                        <span className="editors-pick-price">$50.99</span> 
                    </div>

                    <div className="editors-pick-inner-box-7 editors-pick-inner-box-images">
                         <Link to={`/products/${products[5].id}`}>
                          <img src={products[5].imageUrl}  alt="" />
                          </Link>
                      <span className="editors-pick-price">$55.99</span> 
                    </div> 
                    <div className="editors-pick-inner-box-8">
                      Express yourself in love with a collection of one-of-a-kind baby toys, games, learning, dolls and more</div>        
                </div>
            </section>
    )
  }
}

export default ProductEditorsPicks