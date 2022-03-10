import * as ApiUtilCart from "../utils/cart"

export const RECEIVE_ALL_CART_ITEMS_FOR_USER = "RECEIVE_ALL_CART_ITEMS_FOR_USER";
export const RECEIVE_SINGLE_ITEM_FOR_USER = "RECEIVE_SINGLE_ITEM_FOR_USER";
export const REMOVE_SINGLE_ITEM_FOR_USER = "REMOVE_SINGLE_ITEM_FOR_USER";
export const REMOVE_ALL_ITEMS_FOR_USER = "REMOVE_ALL_ITEMS_FOR_USER"
export const CLEAR_CART_ITEMS_UPON_LOGOUT = "CLEAR_CART_ITEMS_UPON_LOGOUT"

const receiveAllCartItemsForUser = (cartItems) =>({
  type: RECEIVE_ALL_CART_ITEMS_FOR_USER,
  cartItems
});

const receiveSingleItemForUser = (cartItem) =>({
  type: RECEIVE_SINGLE_ITEM_FOR_USER,
  cartItem
});

const removeSingleItemforUser = (cartItem) => ({
  type: REMOVE_SINGLE_ITEM_FOR_USER,
  cartItem
})

const removeAllItemsforUser = (cartItems) => ({
  type: REMOVE_ALL_ITEMS_FOR_USER,
  cartItems
})


//fontend only
const clearCartItems = () =>({
  type: CLEAR_CART_ITEMS_UPON_LOGOUT
})



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

export const removeSingleItemInCartItem = (cartItemId) => dispatch=> {
  return ApiUtilCart.removeSingleItemInCartItem(cartItemId)
    .then(cartItem => dispatch(removeSingleItemforUser(cartItem)))
}

export const removeAllItemsInCartItem = (cartItemId) => dispatch=> {
  return ApiUtilCart.removeAllItemsInCartItem(cartItemId)
    .then(cartItems => dispatch(removeAllItemsforUser(cartItems)))
}



//after logout, clear cart
export const clearCartItemsUponCheckout = () => dispatch =>{
  return dispatch(clearCartItems())
}