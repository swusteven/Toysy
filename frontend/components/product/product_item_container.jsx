import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions/product"
import { postItemToCartItem } from "../../actions/cart"
import ProductItem from "./product_item";
import { 
  fetchAllCartItemsforUser, 
  updateItemInCartItem 
} from "../../actions/cart";



const mSTP = (state,ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    cartItems: state.cart,
    cartDetails: {
      quantity: 1,
      product_id: ownProps.match.params.id,
      cart_id: state.session ? state.session.cartId : null
    }
  }
};
 

const mDTP = dispatch => ({
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId)),
  postItemToCartItem: (item) => dispatch(postItemToCartItem(item)),
  fetchAllCartItemsforUser: (userId) => dispatch(fetchAllCartItemsforUser(userId)),
  updateItemInCartItem: (cartItemId, cartItem) => dispatch(updateItemInCartItem(cartItemId, cartItem))
})

export default connect(mSTP, mDTP)(ProductItem)