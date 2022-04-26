import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions/product"
import { postItemToCartItem } from "../../actions/cart"
import ProductItem from "./product_item";
import { 
  fetchAllCartItemsforUser, 
  updateItemInCartItem 
} from "../../actions/cart";
import { postItemsToOrderItem } from "../../actions/order";


const mSTP = (state,ownProps) => {
  let currentUser = state.session.currentUser;
  let reviews = state.reviews
  debugger
  return {
    product: state.products[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    cartItems: state.cart,
    showReviewBox: showPostReviewField(currentUser, reviews),
    cartDetails: {
      quantity: 1,
      product_id: ownProps.match.params.id,
      cart_id: state.session ? state.session.cartId : null
    }
  }
};
 

//able to post a review if purchased the item && no review posted before
function showPostReviewField(currentUser, reviews, orders){
  if (!currentUser ||  !Object.keys(currentUser).length === 0 || !Object.keys(reviews).length === 0) return false
  
  //checks if currentUser ever purchased this product


  //check if there's an existing review
  for (let review in reviews){ 
    if (reviews[review].user_id === currentUser.id) return false
  }


  return true
}


const mDTP = dispatch => ({
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId)),
  postItemToCartItem: (item) => dispatch(postItemToCartItem(item)),
  fetchAllCartItemsforUser: (userId) => dispatch(fetchAllCartItemsforUser(userId)),
  updateItemInCartItem: (cartItemId, cartItem) => dispatch(updateItemInCartItem(cartItemId, cartItem)),
  postItemsToOrderItem: (userId, itemsInArray) => dispatch(postItemsToOrderItem(userId, itemsInArray)),
})

export default connect(mSTP, mDTP)(ProductItem)