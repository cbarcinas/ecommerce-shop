import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    shoppingCart: [],
    totalItems: 0,
    totalPrice: 0,
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
