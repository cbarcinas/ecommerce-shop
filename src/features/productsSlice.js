import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        name: "Craig",
        category: "Software Engineer",
      },
    ],
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

export default productsSlice.reducer;
