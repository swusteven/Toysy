import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions/product"
import ProductItem from "./product_item";


const mSTP = state => {
  debugger //1
  return {
    product: state.products
  }
};
 

const mDTP = dispatch => ({
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId))
})

export default connect(mSTP, mDTP)(ProductItem)
