import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItemCount,
  decrementItemCount,
} from "../features/shoppingCartSlice";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log("shopping cart :", cart);
  const dispatch = useDispatch();

  const { shoppingCart } = cart;

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
        <div className="absolute bg-slate-300 top-0 right-0 left-0 z-10">
          <XIcon className="w-9 absolute top-4 right-4 cursor-pointer" />
          <h2 className="mt-12 mb-10 text-2xl tracking-wide text-center">
            Shopping Cart
          </h2>
          <div className="bg-slate-300">
            {shoppingCart.map((item) => {
              const { id, title, image, price } = item;
              return (
                <div
                  key={id}
                  className="mx-4 mb-7 p-5 bg-white rounded-lg shadow-2xl"
                >
                  <div className="flex items-center">
                    <img
                      className="max-w-[4.5em] object-contain cursor-pointer"
                      src={image}
                      alt={title}
                    />
                    <div>
                      <p className="text-sm ml-5 leading-snug tracking-wide">
                        {title}
                      </p>
                      <div className="mt-2 w-full flex justify-between">
                        <p className="ml-5">${price}</p>
                        <div className=" text-lg">
                          <span
                            className="text-lg cursor-pointer"
                            onClick={() => handleDecrementCount()}
                          >
                            -
                          </span>
                          <span className="mx-2">1</span>
                          <span
                            className="cursor-pointer"
                            onClick={() => handleIncrementCount()}
                          >
                            +
                          </span>
                        </div>

                        <TrashIcon className="w-5 cursor-pointer" />
                      </div>
                    </div>
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
