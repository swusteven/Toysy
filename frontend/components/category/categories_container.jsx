import { connect } from 'react-redux'
import CategoriesIndex from './categories_index'


const mSTP =state => {
  return {
    products: Object.values(state.products)
  }
}


export default connect(mSTP, null)(CategoriesIndex)
