import { createSlice } from "@reduxjs/toolkit";


// Create Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      return { ...(state, action.payload) };
    },
  },
});

// Export Action Creators
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export Reducer
export default cartSlice.reducer;
