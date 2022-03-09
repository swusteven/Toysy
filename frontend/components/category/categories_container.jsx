import { connect } from 'react-redux'
import CategoriesIndex from './categories_index'
import {fetchAllProducts} from "../../actions/product"


const mSTP =state => {

  return {
    products: Object.values(state.products)
  }
}

const mDTP = dispatch => {
  return {
    fetchAllProducts: ()=>dispatch(fetchAllProducts())
  }
}


export default connect(mSTP, mDTP)(CategoriesIndex)
