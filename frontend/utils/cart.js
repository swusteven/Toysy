import { $CombinedState } from "redux"

export const fetchAllCartItems = (userId) =>(
  $.ajax({
    url: `api/users/${userId}/carts`
  })
)


export const postItemToCartItem = (cartItem) =>(
  $.ajax({
    url: 'api/cart_items',
    method: "POST",
    data: {item: cartItem}
  })
)

export const updateItemInCartItem = (cartItemId, cartItem) =>{
  return $.ajax({
            url: `api/cart_items/${cartItemId}`,
            method: "PATCH",
            data: {item: cartItem}
  })
}




//create a new cart for user who doesn't have a cart
// export const createCart = (userId) => {
//  return $.ajax({
//     url: `/api/carts`,
//     method: "POST", 
//     data: {cart: userId}
//   })
// }