import { createSlice } from "@reduxjs/toolkit";

// Create slice
export const selectedProductSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    // Adding the selected product to state
    selectedProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
    // Remove the selected product from state
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
