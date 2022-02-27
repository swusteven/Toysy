import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modal"

const ModalReducer = (oldState = true, action) =>{
  Object.freeze(oldState);
  let nextState = null;
  switch(action.type){
    case OPEN_MODAL:
      debugger
       nextState = true;
       return nextState;
    case CLOSE_MODAL:
      debugger
       nextState = false;
       return nextState
    default:
      return oldState
  }
}

export default ModalReducer