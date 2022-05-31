import React from "react";
import { XIcon } from "@heroicons/react/outline";

function ShoppingCart() {
  return (
    <>
      <div className="absolute bg-white inset-0">
        <div>
          <h2 className="m-5 text-lg font-semibold">Shopping Cart</h2>
          <XIcon className="w-9 absolute top-4 right-4 cursor-pointer" />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default ShoppingCart;
