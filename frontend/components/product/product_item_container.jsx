import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions/product"
import { postItemToCartItem } from "../../actions/cart"
import ProductItem from "./product_item";
import {fetchAllCartItemsforUser} from "../../actions/cart"


const mSTP = (state,ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    cartDetails: {
      quantity: 1,
      product_id: ownProps.match.params.id, 
      cart_id: state.session.currentUser ? state.session.currentUser.cart_id : null
    }
  }
};
 

const mDTP = dispatch => ({
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId)),
  postItemToCartItem: (item) => dispatch(postItemToCartItem(item)),
})

export default connect(mSTP, mDTP)(ProductItem)
