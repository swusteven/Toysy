import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT
} from "../actions/product"


const productReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
    return Object.assign({}, oldState, action.products)
      
    case RECEIVE_SINGLE_PRODUCT:
      return Object.assign({}, oldState, {[action.product.id]: action.product})
      
    default:
      return oldState
  }

}

export default productReducer

