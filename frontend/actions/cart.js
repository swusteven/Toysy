import * as ApiUtilCart from "../utils/cart"

export const RECEIVE_ALL_CART_ITEMS_FOR_USER = "RECEIVE_ALL_CART_ITEMS_FOR_USER";
export const RECEIVE_SINGLE_ITEM_FOR_USER = "RECEIVE_SINGLE_ITEM_FOR_USER";

const receiveAllCartItemsForUser = (cartItems) =>({
  type: RECEIVE_ALL_CART_ITEMS_FOR_USER,
  cartItems
});

const receiveSingleItemForUser = (cartItem) =>({
  type: RECEIVE_SINGLE_ITEM_FOR_USER,
  cartItem
});



//thunk action creator
export const fetchAllCartItemsforUser = (userId) => dispatch =>{
  return ApiUtilCart.fetchAllCartItems(userId)
    .then(cartItems => dispatch(receiveAllCartItemsForUser(cartItems)))
};

export const postItemToCartItem = (cartItem) => dispatch =>{
  return ApiUtilCart.postItemToCartItem(cartItem)
    .then(cartItem => dispatch(receiveSingleItemForUser(cartItem)))
};

export const updateItemInCartItem =(cartItemId, cartItem) => dispatch =>{
  return ApiUtilCart.updateItemInCartItem(cartItemId, cartItem)
    .then(cartItem => dispatch(receiveSingleItemForUser(cartItem)))
}