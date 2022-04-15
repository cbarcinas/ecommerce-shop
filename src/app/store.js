import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice";

export default configureStore({
  reducer: {
    allProducts: productsSlice,
  },
});
