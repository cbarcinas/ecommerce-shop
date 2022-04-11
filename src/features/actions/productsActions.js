// Action Constants

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT";

// Action Creators

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
