import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// create slice
export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    // If shopping cart has items in local storage we will add that to
    // state otherwise, we will set our shopping cart key to an empty array.
    shoppingCart: localStorage.getItem("shoppingCart")
      ? JSON.parse(localStorage.getItem("shoppingCart"))
      : [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // We can use findIndex() method to verify if the item being added to cart already exists.
      // Specifically we are checking our cart state and if any of the ids matches the
      // id from our payload, we'll capture that in a variable.
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      // If itemIndex exists then we can add to the current count
      // instead of adding a duplicate item to cart
      if (itemIndex >= 0) {
        state.shoppingCart[itemIndex].cartQuantity += 1;
        toast.success(
          `${state.shoppingCart[itemIndex].title} quantity increased`
        );
      } else {
        // If item doesn't exist in cart, we can add it
        // When the user adds a item to their cart, the count becomes 1
        const tempProd = { ...action.payload, cartQuantity: 1 };
        state.shoppingCart.push(tempProd);
        toast.success(`${action.payload.title} added to cart`);
      }
      // console.log(action.payload);

      // Once we have added the items to state,
      // we can add the shopping cart to local storage
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    },
    removeFromCart(state, action) {
      // Use filter method to return an array of cart items without,
      // the id that matches our action payload
      const newCartItems = state.shoppingCart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      // Assign our shoppingCart state to the newly filtered array
      state.shoppingCart = newCartItems;
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
      toast.error(`${action.payload.title} removed from cart`);
    },
    decrementItemCount: (state, action) => {
      // Find the index of the item that matches our payload
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      // If that item's quantity is greater than 1 then we subtract 1 then show success message
      if (state.shoppingCart[itemIndex].cartQuantity > 1) {
        state.shoppingCart[itemIndex].cartQuantity -= 1;
        toast.success(`${action.payload.title} quantity decreased`);
      }
      // If the current item quantity is 1 and the user decreases it, the item's
      // quantity should be 0 therefore removed from the cart.
      else if (state.shoppingCart[itemIndex].cartQuantity === 1) {
        const newCartItems = state.shoppingCart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.shoppingCart = newCartItems;

        localStorage.setItem(
          "shoppingCart",
          JSON.stringify(state.shoppingCart)
        );
        toast.error(`${action.payload.title} removed from cart`);
      }
    },
    clearCart: (state, action) => {
      state.shoppingCart = [];
      toast.error(`Bag Cleared`);

      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    },
    getTotalPrice(state,action) => {
      // cartTotal is our accumulator and cartItem comes from iteration   
      // of shoppingCart that our reduce method is accessing
      state.shoppingCart.reduce((cartTotal, cartItem)=> {}, {
        total: 0,
        quantity: 0,
      })
    }
  },
});

// export actions
export const { addToCart, removeFromCart, decrementItemCount, clearCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
