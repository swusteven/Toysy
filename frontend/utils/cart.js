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