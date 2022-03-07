export const fetchAllCartItems = (userId) =>(
  $.ajax({
    url: `api/users/${userId}/carts`
  })
)