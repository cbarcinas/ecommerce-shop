import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    shoppingCart: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.shoppingCart.push(action.payload);
    },
  },
});

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
