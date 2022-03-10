import { 
  RECEIVE_ALL_ORDERS_FOR_USER,
  CLEAR_ORDER_HISTORY_UPON_LOGOUT
 } from "../actions/order"

const orderReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ORDERS_FOR_USER:
      return Object.assign({}, action.orders)

    case CLEAR_ORDER_HISTORY_UPON_LOGOUT:
      return {}
         
    default:
      return oldState
  }
}

export default orderReducer