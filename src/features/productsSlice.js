import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        name: "craig",
        category: "developer",
      },
    ],
  },
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
    selectedProduct: (state, action) => {
      return { ...state };
    },
  },
});

// export action creators
export const { setProducts, selectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
