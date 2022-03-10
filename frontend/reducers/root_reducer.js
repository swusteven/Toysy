import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import ModalReducer from "./modal_reducer";
import productReducer from "./product_reducer";
import reviewReducer from "./review_reducer";
import sessionErrorsReducer from "./session_errors";
import cartReducer from "./cart_reducer";
import orderReducer from "./order_reducer"


const RootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer,
  errors: sessionErrorsReducer,
  modalOpen: ModalReducer,
  reviews: reviewReducer,
  cart: cartReducer,
  orders: orderReducer 
});

export default RootReducer