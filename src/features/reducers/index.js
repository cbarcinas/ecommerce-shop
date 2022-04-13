import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
});

export default rootReducer;
