import * as ApiUtilOrder from "../utils/order_util"

export const RECEIVE_ALL_ORDERS_FOR_USER = "RECEIVE_ALL_ORDERS_FOR_USER"


const receiveAllOrdersForUser = (orders) => {
  debugger
  return {
  type: RECEIVE_ALL_ORDERS_FOR_USER,
  orders
}};




export const postItemsToOrderItem = (userId, itemsInArray) => dispatch => {
  return ApiUtilOrder.addItemsToOrderItem(userId, itemsInArray)
    .then(orders => dispatch(receiveAllOrdersForUser(orders)))
}

export const fetchOrders = (userId) => dispatch =>{
  debugger
  return ApiUtilOrder.fetchOrders(userId)
    .then(orders => dispatch(receiveAllOrdersForUser(orders)))
}