import React from 'react'
import ProductDicoverUniqueItems from './main_page_discover_unique_items';
import ProductEditorsPicks from './main_page_editors_picks';
import ProductMostPopular from './main_page_most_popular';

class MainPageGallery extends React.Component{
  componentDidMount(){
     this.props.fetchAllProducts();
  }

  render(){
    return (
      <div className="main-page-gallery-wrapper">
          <ProductMostPopular products ={this.props.products}/>
          <ProductEditorsPicks products ={this.props.products}/>
          <ProductDicoverUniqueItems products ={this.props.products}  />
      </div>
    )
  }
}

export default MainPageGallery

