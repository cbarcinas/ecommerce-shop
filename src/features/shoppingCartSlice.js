import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    shoppingCart: [],
  },
  reducers: {
    // Add item to shopping cart
    addToCart: (state, action) => {
      return { ...state.cartItems.push(action.payload) };
    },
  },
});

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
