import { RECEIVE_ALL_ORDERS_FOR_USER } from "../actions/order"

const orderReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALL_ORDERS_FOR_USER:
      return Object.assign({}, action.orders)
         
    default:
      return oldState
  }
}

export default orderReducer