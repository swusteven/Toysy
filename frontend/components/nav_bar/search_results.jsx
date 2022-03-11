import React from 'react'
import { searchQuery } from '../../utils/searchQuery'
import { Link } from 'react-router-dom'

class SearchResults extends React.Component{
  constructor(props){
    super(props)
  };
  
  componentDidMount(){
    this.props.fetchAllProducts()
  }

  render(){
    const {searchValue, products} = this.props
    return (
      !searchValue ? <h6 className="search-result-no-match">No Match. Please try again with different search key word(s)</h6> :
      <>
           <section className='search-result-top'>
             <div>
               <h1>{Object.values(searchQuery(searchValue, products)).length === 0 ? 0 : Object.values(searchQuery(searchValue, products)).length} Results Found</h1>   
            </div>
          </section> 
          <section className='search-result-wrapper'>

            {
              Object.values(searchQuery(searchValue, products)).map(product =>{
                  return <div key={product.name} className="search-results-container">
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.imageUrl} />
                                    <h2>{product.name}</h2>
                                    <p>${product.price}</p>
                                    <p>{product.seller.fname}'s store</p> 
                                  </Link>
                              </div>
                               })
          

             }
          </section>
      </>
    )
  }
}

export default SearchResults

