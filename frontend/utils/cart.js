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


//create a new cart for user who doesn't have a cart
export const createCart = (userId) => {
  debugger
 return $.ajax({
    url: `/api/carts`,
    method: "POST", 
    data: {cart: userId}
  })
}