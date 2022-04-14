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
  //  add reducers
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
  },
});
