import { connect } from "react-redux";
import { fetchSingleProduct } from "../../actions/product"
import { postItemToCartItem } from "../../actions/cart"
import ProductItem from "./product_item";
import { 
  fetchAllCartItemsforUser, 
  updateItemInCartItem 
} from "../../actions/cart";
import { postItemsToOrderItem } from "../../actions/order";
import { fetchOrders, clearOrderHistoryCheckout } from "../../actions/order"

const mSTP = (state,ownProps) => {
  let currentUser = state.session.currentUser;
  let reviews = state.reviews
  let orders = state.orders
  let product = state.products[ownProps.match.params.id]
  
  return {
    product: product,
    currentUser: currentUser,
    cartItems: state.cart,
    showReviewBox: showPostReviewField(currentUser, reviews, orders, product),
    cartDetails: {
      quantity: 1,
      product_id: ownProps.match.params.id,
      cart_id: state.session ? state.session.cartId : null
    }
  }
};
 

//able to post a review if purchased the item && no review posted before
function showPostReviewField(currentUser, reviews, orders, product){
  if (!currentUser ||  !Object.keys(currentUser).length === 0 || !Object.keys(reviews).length === 0) return false
  
  let bought = false;
  let noReview = true;
  //checks if currentUser ever purchased this product
  //if no, return false
  for (let order in orders){
    for (let key in orders[order]){
      let purchaseProduct = orders[order]
      if (purchaseProduct[key].product_id === product.id){
        bought = true;
        break;
      }     
    }
  }

  //check if there's an existing review 
  for (let review in reviews){ 
    if (reviews[review].user_id === currentUser.id){
      noReview = false;
    }
  }

  
  // purchased the item && no review posted before
  return bought && noReview ? true : false
}


const mDTP = dispatch => ({
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId)),
  postItemToCartItem: (item) => dispatch(postItemToCartItem(item)),
  fetchAllCartItemsforUser: (userId) => dispatch(fetchAllCartItemsforUser(userId)),
  updateItemInCartItem: (cartItemId, cartItem) => dispatch(updateItemInCartItem(cartItemId, cartItem)),
  postItemsToOrderItem: (userId, itemsInArray) => dispatch(postItemsToOrderItem(userId, itemsInArray)),
  fetchOrders: (userId) => dispatch(fetchOrders(userId)),
  clearOrderHistoryCheckout: () => dispatch(clearOrderHistoryCheckout())
})

export default connect(mSTP, mDTP)(ProductItem)