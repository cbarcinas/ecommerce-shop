// import actions
import { ActionTypes } from "../actions/productActions";

// set state
const initialState = {
  products: [],
};

// create reducers

export const productsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
