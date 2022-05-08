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
  },
});

// Export action creators
export const { setProducts } = productsSlice.actions;

// Export reducer
export default productsSlice.reducer;
