import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import selectedProductReducer from "../features/selectedProductSlice";

export default configureStore({
  reducer: {
    allProducts: productsReducer,
    product: selectedProductReducer,
  },
});
