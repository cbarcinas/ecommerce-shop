import { createSlice } from "@reduxjs/toolkit";

// Create slice
export const selectedProductSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    selectedProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeSelectedProduct: () => {
      return {};
    },
  },
});

// Export action creators
export const { selectedProduct, removeSelectedProduct } =
  selectedProductSlice.actions;

// Export reducer
export default selectedProductSlice.reducer;
