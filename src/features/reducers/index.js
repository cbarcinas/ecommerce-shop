import { combineReducers } from "redux";
import { productReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: productReducer,
});
