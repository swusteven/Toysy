import React from 'react'
import { searchQuery } from '../../utils/searchQuery'

class SearchResults extends React.Component{
  constructor(props){
    super(props)
  };
  
  componentDidMount(){
    this.props.fetchAllProducts()
  }

  render(){
    const {searchValue, products} = this.props
    // let results = searchQuery(this.props.search, this.props.products) 
    return (
      !searchValue ? null :
      <section>
        {
          Object.values(searchQuery(searchValue, products)).map(product =>(
              <h1>{product.name}</h1>
          ))
            
          

       }
      </section>
    )
  }
}

export default SearchResults

