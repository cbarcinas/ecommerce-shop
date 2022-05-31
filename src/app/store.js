import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import selectedProductReducer from "../features/selectedProductSlice";
import cartReducer from "../features/cartSlice";

export default configureStore({
  reducer: {
    allProducts: productsReducer,
    product: selectedProductReducer,
    cart: cartReducer,
  },
});
