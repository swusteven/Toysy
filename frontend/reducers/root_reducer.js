import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import ModalReducer from "./modal_reducer";


const RootReducer = combineReducers({
  session: sessionReducer,
  modalOpen: ModalReducer
});

export default RootReducer