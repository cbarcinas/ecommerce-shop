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

  const handleDecrementCount = () => {
    dispatch(decrementItemCount());
  };

  const handleIncrementCount = () => {
    dispatch(incrementItemCount());
  };

  // Item param is coming from our filter method
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const clearCart = () => {
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
        <div className="absolute bg-slate-300 top-0 right-0 left-0">
          <XIcon className="w-9 absolute top-4 right-4 cursor-pointer" />
          <h2 className="mt-12 mb-10 text-2xl tracking-wide text-center">
            Shopping Cart
          </h2>

          <div className="bg-slate-300 mx-2">
            {shoppingCart.map((item) => {
              const { id, title, image, price, cartQuantity, cartTotalAmount } =
                item;
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
                            onClick={() => handleDecrementCount()}
                          >
                            -
                          </button>
                          <span className="mx-2">{cartQuantity}</span>
                          <button
                            className="cursor-pointer"
                            onClick={() => handleIncrementCount()}
                          >
                            +
                          </button>
                        </div>
                        <TrashIcon
                          className="w-5 text-red-500 cursor-pointer"
                          onClick={() => handleRemoveFromCart(item)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart Summary */}
          <div className="flex flex-col justify-center items-center">
            <button
              className="bg-red-500 px-3 p-1 rounded-md block max-w-xs "
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <div className="mt-5">
              <div className="flex">
                <span className="flex-1">Subtotal</span>
                <span className="flex-1 justify-end">$19.99</span>
              </div>
              <p className="text-xs tracking-wide text-gray-800">
                Taxes and Shipping calculated at checkout
              </p>
              <button>Checkout</button>
              <div>
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
