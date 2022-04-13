import { ActionTypes } from "../actions/productActions";

const initialState = {
  products: [
    {
      id: 1,
      title: "craig",
      category: "developer",
    },
  ],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
