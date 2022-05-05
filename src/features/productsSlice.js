import { createSlice } from "@reduxjs/toolkit";

// Create slice
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
    selectedProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export action creators
export const { setProducts, selectedProduct } = productsSlice.actions;

// Export reducer
export default productsSlice.reducer;
