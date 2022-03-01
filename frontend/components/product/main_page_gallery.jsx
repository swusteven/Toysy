import React from 'react'
import ProductIndex from './product_index';

class MainPageGallery extends React.Component{
  componentDidMount(){
     this.props.fetchAllProducts();
  }

  render(){
    debugger
    return (
      <div>
        {
          this.props.products.map(product =>{
            return <ProductIndex product ={product} />
          })
        }
      </div>
    )
  }
}

export default MainPageGallery

