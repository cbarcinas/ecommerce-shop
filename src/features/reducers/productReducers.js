// import actions
import { ActionTypes } from "../actions/productsActions";

// set initial state
const initialState = {
  products: [
    {
      id: 1,
      title: "craig",
      category: "developer",
    },
  ],
};

// create reducers
export const productReducers = (state = initialState, { type, payload }) => {
  // default: (state = initialState, action)
  // since we know that we need type & payload from action, we can destructure them
  // i.e (state = initialState, { type, payload })
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
