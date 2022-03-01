import React from 'react'

class ProductEditorsPicks extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){

  }

  render(){  
    return (
      <div className="editors-pick-wrapper">
        <div className='editors-pick-top'>
            <div className="editors-pick-inner-box-1">
              <p>Editors’ Picks</p>
              <h1>Inspired and made with love</h1>
              <h3>Shopping these unique finds -></h3>
            </div>
            <div className="editors-pick-inner-box-2">
              <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" />
            </div>
            <div className="editors-pick-inner-box-3">
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" />
            </div>
            <div className="editors-pick-inner-box-4">
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" />
            </div>
        </div>
        
        <div className='editors-pick-bottom'>
            
            <div className="editors-pick-inner-box-5">
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" />
            </div>
            <div className="editors-pick-inner-box-6">
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" />
            </div>
            <div className="editors-pick-inner-box-7">
               <img src="https://i.etsystatic.com/17305851/r/il/6cb808/3152662087/il_1140xN.3152662087_kks0.jpg" alt="" /></div>      
            <div className="editors-pick-inner-box-8">
              Express yourself in love with a collection of one-of-a-kind baby toys, games, learning, dolls and more</div>        
        </div>
      </div>
    )
  }
}

export default ProductEditorsPicks