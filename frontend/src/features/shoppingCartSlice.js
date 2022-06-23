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
    cartTotalAmount: 0,
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
    clearCart: (state) => {
      state.shoppingCart = [];
      toast.error(`Bag emptied`);

      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    },
    getTotalPrice(state) {
      // WHAT'S HAPPENING ?
      // This reduce method has to params, 1st is our callback fn and second
      // is our initial value which is an object containing total, quantity.
      let { total, quantity } = state.shoppingCart.reduce(
        // This callback accepts 2 params
        // The accumulator (cartTotal), which holds our {} containing total, quantity.
        // (cartItem) which will be the item we are getting each time we iterate through our shoppingCart state.
        (cartTotal, cartItem) => {
          // Destructure from cartItem
          const { price, cartQuantity } = cartItem;
          // Get total price for each item being iterated by multiplying the cartItem's price & quantity.
          const itemTotal = price * cartQuantity;

          // We are taking the cartTotal, which we set to 0 in our initial{} and adding the itemTotal.
          // Each time an item is iterated, our inital{} will update and add each item's quantity and total.
          // The inital{} will now reflect the total price and quantity of each item in our state shoppingCart array.
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
          // Since we know that we need to access {total, quantity} from this reduce method, we can
          // store this entire method in a var and destructure these two keys.
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      // Parse decimal of subtotal to avoid long digits
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  decrementItemCount,
  clearCart,
  getTotalPrice,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
