import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import ModalReducer from "./modal_reducer";
import productReducer from "./product_reducer";
import sessionErrorsReducer from "./session_errors";



const RootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer,
  errors: sessionErrorsReducer,
  modalOpen: ModalReducer
});

export default RootReducer