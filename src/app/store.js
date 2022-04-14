import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});

