import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    shoppingCart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      return { ...state.cartItems.push(action.payload) };
    },
  },
});
