import React from 'react'
import ProductEditorsPicks from './main_page_editors_picks';
import ProductMostPopular from './main_page_most_popular';

class MainPageGallery extends React.Component{
  componentDidMount(){
    this.props.fetchAllProducts();
  }

  render(){
    return (
      <section className="main-page-gallery-wrapper">
          <ProductEditorsPicks products ={this.props.products}/>
          <ProductMostPopular products ={this.props.products}/>
      </section>
    )
  }
}

export default MainPageGallery

