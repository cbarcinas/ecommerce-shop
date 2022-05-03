import { createSlice } from "@reduxjs/toolkit";

// create slice
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

// export action creators
export const { setProducts, selectedProduct } = productsSlice.actions;

// export reducer
export default productsSlice.reducer;
