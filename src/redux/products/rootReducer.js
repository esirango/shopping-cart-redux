import { combineReducers } from "redux";

// Reducers
import productReducer from "./productReducer";
import cartReducer from "../cart/cartReducer";

const rootReducer = combineReducers({
  productsState: productReducer,
  cartState: cartReducer,
});

export default rootReducer;
