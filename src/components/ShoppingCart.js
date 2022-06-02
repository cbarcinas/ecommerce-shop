import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItemCount,
  decrementItemCount,
} from "../features/shoppingCartSlice";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log("shopping cart :", cart);
  const dispatch = useDispatch();

  const { shoppingCart, totalItems } = cart;

  const handleDecrementCount = () => {
    dispatch(decrementItemCount);
  };

  const handleIncrementCount = () => {
    dispatch(incrementItemCount);
  };

  // console.log("cart AFTER page load: ", shoppingCart);

  return (
    <>
      {shoppingCart.length === 0 ? (
        <div>
          <h1>Your cart is empty.</h1>
        </div>
      ) : (
        <div className="absolute bg-white inset-0 z-10">
          <XIcon className="w-9 absolute top-4 right-4 cursor-pointer" />
          <h2 className="mt-12 mb-10 text-2xl tracking-wide text-center">
            Shopping Cart
          </h2>
          <div className="bg-white">
            {shoppingCart.map((item) => {
              const { id, title, image, price } = item;
              return (
                <div key={id} className="p-5">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <div>
                    <span
                      className="text-lg cursor-pointer"
                      onClick={() => handleDecrementCount()}
                    >
                      -
                    </span>
                    <span>{totalItems}</span>
                    <span
                      className="cursor-pointer"
                      onClick={() => handleIncrementCount()}
                    >
                      +
                    </span>
                    <p>${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
