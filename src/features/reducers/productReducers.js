// import actions
import { ActionTypes } from "../actions/productActions";

// set state
const initialState = {
  products: [],
};

// create reducers

export const productsReducers = (state = initialState, { type, payload }) => {
    // alt: (state = initialState, action)
    // since we know that we need type & payload from action, we can destructure them
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
