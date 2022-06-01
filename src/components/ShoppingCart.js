import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  console.log("shopping cart :", cart);

  const { shoppingCart, totalItems, totalPrice } = cart;
  console.log(shoppingCart);

  return (

    <>
      {shoppingCart.length === 0 ? (
        <div> Your cart is empty.</div>
      ) : (
        <div className="absolute bg-white inset-0">
          <div>
            <h2 className="m-5 text-xl font-medium tracking-wide">
              Shopping Cart
            </h2>
            <XIcon className="w-9 absolute top-4 right-4 cursor-pointer" />
          </div>
          <div>
            {shoppingCart.map((item) => {
              const { id, title, image, price } = item;
              return (
                <div key={id}>
                  <h3>{title}</h3>
                  <img src={image} alt={title} />
                  <p>${price}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
