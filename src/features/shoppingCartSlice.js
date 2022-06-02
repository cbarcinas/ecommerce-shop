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
      // We can use findIndex() method to verify if the item being
      // added is already in the user's cart.
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      // If itemIndex exists then we can add to the current count
      // instead of adding a duplicate item to cart
      if (itemIndex >= 0) {
        state.shoppingCart[itemIndex].cartQuantity += 1;
      } else {
        // If item doesn't exist in cart, we can add it
        // When the user adds a item to their cart, the count becomes 1
        const tempProd = { ...action.payload, cartQuantity: 1 };
        state.shoppingCart.push(tempProd);
      }
    },
    incrementItemCount: (state) => {
      return state.totalItems + 1;
    },
    decrementItemCount: (state) => {
      return state.totalItems - 1;
    },
  },
});

export const { addToCart, incrementItemCount, decrementItemCount } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
