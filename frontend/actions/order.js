import * as ApiUtilOrder from "../utils/order_util"

export const RECEIVE_ALL_ORDERS_FOR_USER = "RECEIVE_ALL_ORDERS_FOR_USER"
export const CLEAR_ORDER_HISTORY_UPON_LOGOUT = "CLEAR_ORDER_HISTORY_UPON_LOGOUT"


const receiveAllOrdersForUser = (orders) => {
  return {
  type: RECEIVE_ALL_ORDERS_FOR_USER,
  orders
}};

const clearOrderHistory = ()=>({
  type: CLEAR_ORDER_HISTORY_UPON_LOGOUT
})



export const postItemsToOrderItem = (userId, itemsInArray) => dispatch => {
  return ApiUtilOrder.addItemsToOrderItem(userId, itemsInArray)
    .then(orders => dispatch(receiveAllOrdersForUser(orders)))
}

export const fetchOrders = (userId) => dispatch =>{
  return ApiUtilOrder.fetchOrders(userId)
    .then(orders => dispatch(receiveAllOrdersForUser(orders)))
}

export const clearOrderHistoryCheckout = () => dispatch =>{
  return dispatch(clearOrderHistory())
}