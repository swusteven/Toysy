import React from 'react'
import { Link } from 'react-router-dom'

class CategoriesIndex extends React.Component{
  constructor(props){
    super(props)
  };
  
  componentDidMount(){
    this.props.fetchAllProducts()
  }

  render(){
    const { products } = this.props
    
    //for the h1 display
    const pairs = {
    "btt": "Baby & Toddler Toys",
      "sap": "Stuffed Animals & Plushies",
      "ls": "Learning & School",
      "daf": "Dolls & Action Figures"
    }

    //In the database, category is in different name  & -> and
    const findCategory = {
      "btt": "Baby and Toddler Toys",
      "sap":"Stuffed Animals and Plushies",
      "ls":"Learning and School",
      "daf":"Dolls and Action Figures"
    }

    let productInCategory = products.length === 0 ? null : products.filter(product => product.category === findCategory[this.props.match.params.category])
    return (
      <>
        <section className='category-top-title'>
          <div><h1>{pairs[this.props.match.params.category]}</h1></div>
        </section>
        
        {products.length === 0 ? null : 
          <section className='category-wrapper'>
            <div className='category-left'>
                  <h1>filter goes here</h1>
            </div>

            <div className='category-right'>
              <div className='category-right-top'>
                <h2>{productInCategory.length} results</h2>
              </div>

              <div className="category-right-bottom">
                {
                  productInCategory.map(product =>{
                    return <div key={product.name} className="category-right-product-container">
                            <Link to={`/products/${product.id}`}>
                                <img src={product.imageUrl} />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <p>{product.seller.fname}'s store</p> 
                              </Link>

                          </div>
                  })
                }
              </div>
            </div>

  


          </section>

        }
        
      </>
    )
  };
};

export default CategoriesIndex