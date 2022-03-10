export const addItemsToOrderItem= (userId, itemsInArray) => {
  return $.ajax({
    url: `/api/users/${userId}/order_items`,
    method: 'POST',
    data: {itemsInArray}
  })
}

