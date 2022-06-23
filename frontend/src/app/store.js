import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import selectedProductReducer from "../features/selectedProductSlice";
import shoppingCartReducer from "../features/shoppingCartSlice";

export default configureStore({
  reducer: {
    allProducts: productsReducer,
    product: selectedProductReducer,
    cart: shoppingCartReducer,
  },
});
