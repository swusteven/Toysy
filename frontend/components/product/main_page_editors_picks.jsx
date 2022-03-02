import React from 'react'
import { Link } from 'react-router-dom';

class ProductEditorsPicks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){  
    const {products} = this.props
 
    return (
      <div className="editors-pick-wrapper">
        <div className='editors-pick-top'>
            <div className="editors-pick-inner-box-1">
              <p>Editors’ Picks</p>
              <h1>Made with love</h1>
              <h3>Shop these unique finds <i className="fa-solid fa-arrow-right"></i></h3>
            </div>

            <div className="editors-pick-inner-box-2 editors-pick-inner-box-images">
            <Link to="/productitem" product={products[0]}>
                <img src={products.length !== 0 ? products[0].imageUrl : null} alt="" />        
            </Link>
                     
             
            <span className="editors-pick-price">$20.99</span>
            </div>
            
            <div className="editors-pick-inner-box-3 editors-pick-inner-box-images">
               <img src={products.length !== 0 ? products[1].imageUrl : null}  alt="" />
              <span className="editors-pick-price">$220.99</span>
            </div>

            <div className="editors-pick-inner-box-4 editors-pick-inner-box-images">
               <img src={products.length !== 0 ? products[2].imageUrl : null}  alt="" />
               <span className="editors-pick-price">$9.99</span>
            </div>
        </div>
        
        <div className='editors-pick-bottom'>
            
            <div className="editors-pick-inner-box-5 editors-pick-inner-box-images">
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" />
                <span className="editors-pick-price">$40.99</span>
            </div>

            <div className="editors-pick-inner-box-6 editors-pick-inner-box-images" >
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" />
                <span className="editors-pick-price">$50.99</span> 
            </div>

            <div className="editors-pick-inner-box-7 editors-pick-inner-box-images">
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" /> 
               <span className="editors-pick-price">$55.99</span> 
            </div> 
            <div className="editors-pick-inner-box-8">
              Express yourself in love with a collection of one-of-a-kind baby toys, games, learning, dolls and more</div>        
        </div>
      </div>
    )
  }
}

export default ProductEditorsPicks