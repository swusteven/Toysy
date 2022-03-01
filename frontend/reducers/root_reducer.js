import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import ModalReducer from "./modal_reducer";
import productReducer from "./product_reducer";


const RootReducer = combineReducers({
  session: sessionReducer,
  product: productReducer,
  modalOpen: ModalReducer

});

export default RootReducer