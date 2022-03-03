import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions/product"
import ProductItem from "./product_item";


const mSTP = (state,ownProps) => {
    return {
    product: state.products[ownProps.match.params.id]
  }
};
 

const mDTP = dispatch => ({
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId))
})

export default connect(mSTP, mDTP)(ProductItem)
