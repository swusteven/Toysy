import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT
} from "../actions/product"


const productReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {

    case RECEIVE_ALL_PRODUCTS:
    return action.products
      
    case RECEIVE_SINGLE_PRODUCT:
      return action.product
      
    default:
      return oldState
  }

}

export default productReducer

