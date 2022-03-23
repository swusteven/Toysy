import React from 'react'
import { Link } from 'react-router-dom';
import { shuffleArray } from '../../utils/shuffle_products.array'

class ProductEditorsPicks extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { products } = this.props

    return (products.length === 0 ? null :
      <section className="editors-pick-wrapper">
        <div className='editors-pick-top'>

          <div className="editors-pick-inner-box-1">
            <p>Editors’ Picks</p>
            <h1>Curated collections hand-picked by Toysy editors</h1>
            <h3>Shop these unique finds <i className="fa-solid fa-arrow-right"></i></h3>
          </div>

          <div className="editors-pick-inner-box-2 editors-pick-inner-box-images hover-area">

            <Link to={`/products/${products[3].id}`}>
              <img src={products[3].imageUrl} />
            </Link>
            <span className="editors-pick-price">${products[3].price}</span>
            <h4 className="hover-text">{products[3].name}</h4>
          </div>

          <div className="editors-pick-inner-box-3 editors-pick-inner-box-images hover-area">
            <Link to={`/products/${products[1].id}`}>
              <img src={products[1].imageUrl} />
            </Link>
            <span className="editors-pick-price">${products[1].price}</span>
            <h4 className="hover-text">{products[1].name}</h4>
          </div>

          <div className="editors-pick-inner-box-4 editors-pick-inner-box-images hover-area">
            <Link to={`/products/${products[13].id}`}>
              <img src={products[13].imageUrl} />
            </Link>
            <span className="editors-pick-price">${products[13].price}</span>
            <h4 className="hover-text">{products[13].name}</h4>
          </div>
        </div>


        <div className='editors-pick-bottom'>
          <div className="editors-pick-inner-box-5 editors-pick-inner-box-images hover-area">
            <Link to={`/products/${products[4].id}`}>
              <img src={products[4].imageUrl} />
            </Link>
            <span className="editors-pick-price">${products[4].price}</span>
            <h4 className="hover-text">{products[4].name}</h4>
          </div>

          <div className="editors-pick-inner-box-6 editors-pick-inner-box-images hover-area" >
            <Link to={`/products/${products[5].id}`}>
              <img src={products[5].imageUrl} />
            </Link>
            <span className="editors-pick-price">${products[5].price}</span>
            <h4 className="hover-text">{products[5].name}</h4>
          </div>

          <div className="editors-pick-inner-box-7 editors-pick-inner-box-images hover-area">
            <Link to={`/products/${products[12].id}`}>
              <img src={products[12].imageUrl} />
            </Link>
            <span className="editors-pick-price">${products[12].price}</span>
            <h4 className="hover-text">{products[12].name}</h4>
          </div>
          <div className="editors-pick-inner-box-8">
            Express yourself in love with a collection of one-of-a-kind baby toys, games, learning, dolls and more</div>
        </div>
      </section>
    )
  }
}

export default ProductEditorsPicks