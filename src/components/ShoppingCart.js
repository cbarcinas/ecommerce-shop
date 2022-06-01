import React from "react";
import { XIcon } from "@heroicons/react/outline";

function ShoppingCart() {
  return (
    <>
      <div className="absolute bg-white inset-0">
        <div>
          <h2 className="m-5 text-xl font-medium tracking-wide">
            Shopping Cart
          </h2>
          <XIcon className="w-9 absolute top-4 right-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
