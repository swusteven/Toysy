export const addItemsToOrderItem= (userId, itemsInArray) => {
  debugger
  return $.ajax({
    url: `/api/users/${userId}/order_items`,
    method: 'POST',
    data: {itemsInArray}
  })
}

