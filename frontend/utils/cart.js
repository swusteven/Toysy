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

export const removeSingleItemInCartItem = (cartItemId) => {
  return $.ajax({
          url: `api/cart_items/${cartItemId}`,
          method: "DELETE"
        })
}

export const removeAllItemsInCartItem = (cartId) =>{
  return $.ajax({
    url: `/api/carts/${cartId}`,
    method: "DELETE"
  })
}

