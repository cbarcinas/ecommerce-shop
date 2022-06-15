import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  incrementItemCount,
  decrementItemCount,
} from "../features/shoppingCartSlice";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log("shopping cart :", cart);
  const dispatch = useDispatch();

  const { shoppingCart } = cart;

  const handleDecrementCount = (item) => {
    dispatch(decrementItemCount(item));
  };

  const handleIncrementCount = (item) => {
    dispatch(incrementItemCount(item));
  };

  // Item param is coming from our filter method
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const clearCart = () => {
    // Removes key/value from ls, then regresh window
    window.localStorage.removeItem("shoppingCart");
    window.location.reload();
  };

  // console.log("cart AFTER page load: ", shoppingCart);

  return (
    <>
      {shoppingCart.length === 0 ? (
        <>
          <div className="absolute">
            <div className="h-screen w-screen flex justify-center items-center text-center">
              <Link to="/">
                <div className="cursor-pointer">
                  <p className="text-xl text-left">oops,</p>
                  <h1 className="text-4xl">your cart is empty</h1>
                  <Link to="/">
                    <h2 className="text-2xl underline">shop now</h2>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className=" bg-slate-300 h-screen w-screen absolute">
          <XIcon className="w-9 absolute top-4 right-4 cursor-pointer" />
          <h2 className="mt-12 mb-10 text-2xl tracking-wide text-center">
            Shopping Cart
          </h2>

          <div className="bg-slate-300 mx-2">
            {shoppingCart.map((cartItem) => {
              const { id, title, image, price, cartQuantity } =
                cartItem;
              return (
                <div
                  key={id}
                  className="mx-auto mb-7 max-w-xs min-w-[40%] p-5 bg-white rounded-lg shadow-2xl"
                >
                  <div className="flex items-center">
                    <div className="flex-2">
                      <img
                        className="max-w-[4.5em] object-contain cursor-pointer"
                        src={image}
                        alt={title}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm ml-5 leading-snug tracking-wide">
                        {title}
                      </p>
                      <div className="mt-2 text-lg flex justify-between items-center">
                        <p className="ml-5">${price}</p>
                        <div className="text-lg">
                          <button
                            className="cursor-pointer"
                            onClick={() => handleDecrementCount(cartItem)}
                          >
                            -
                          </button>
                          <span className="mx-2">{cartQuantity}</span>
                          <button
                            className="cursor-pointer"
                            onClick={() => handleIncrementCount(cartItem)}
                          >
                            +
                          </button>
                        </div>
                        <TrashIcon
                          className="w-5 text-red-500 cursor-pointer"
                          onClick={() => handleRemoveFromCart(cartItem)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart Summary */}
          <div className="flex flex-col items-center">
            <button
              className=" bg-red-500 text-white tracking-wider px-3 py-1 rounded-md block max-w-xs "
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <div className="flex flex-col mt-5">
              <div className="flex text-xl">
                <span className="flex-1">Subtotal</span>
                <span>$19.99</span>
              </div>
              <p className="mb-5 text-xs tracking-wide text-gray-600">
                Taxes and Shipping calculated at checkout
              </p>
              <button className="px-12 py-2 items-center bg-blue-500 text-white text-xl tracking-wider cursor-pointer rounded-md ">
                Checkout
              </button>
              <div>
                <p className="mt-5 text-xs tracking-wide text-gray-600">
                  Not quite ready to checkout ?
                </p>
                <Link to="/">Continue Shopping</Link>
              </div>
            </div>
          </div>
          {/* End Cart Summary */}
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
