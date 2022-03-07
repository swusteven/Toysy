import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions/product"
import { postItemToCartItem } from "../../actions/cart"
import ProductItem from "./product_item";
import {fetchAllCartItemsforUser} from "../../actions/cart"


const mSTP = (state,ownProps) => {
    return {
    product: state.products[ownProps.match.params.id],
    cart: Object.values(state.cart),
    currentUser: state.session.currentUser
  }
};
 

const mDTP = dispatch => ({
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId)),
  postItemToCartItem: (item) => dispatch(postItemToCartItem(item)),
  fetchAllCartItemsforUser: (userId) => dispatch(fetchAllCartItemsforUser(userId))
})

export default connect(mSTP, mDTP)(ProductItem)
