import { createSlice } from "@reduxjs/toolkit";

// Create slice
export const selectedProductSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
  },
  reducers: {
    selectedProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export action creators
export const { selectedProduct } = selectedProductSlice.actions;

// Export reducer
export default selectedProductSlice.reducer;
