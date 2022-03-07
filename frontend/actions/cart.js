import * as ApiUtilCart from "../utils/cart"

export const RECEIVE_ALL_CART_ITEMS_FOR_USER = "RECEIVE_ALL_CART_ITEMS_FOR_USER"

const receiveAllCartItemsForUser = (cartItems) =>({
  type: RECEIVE_ALL_CART_ITEMS_FOR_USER,
  cartItems
});


//thunk action creator
export const fetchAllCartItemsforUser = (userId) => dispatch =>{
  return ApiUtilCart.fetchAllCartItems(userId)
    .then(cartItems => dispatch(receiveAllCartItemsForUser(cartItems)))
};

