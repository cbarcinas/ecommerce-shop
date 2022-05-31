import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div className="absolute bg-white inset-0">
          <div>
            <h2 className="m-5 text-xl font-medium tracking-wide">
              Shopping Cart
            </h2>
            <XIcon
              className="w-9 absolute top-4 right-4 cursor-pointer"
              onClick={toggle}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ShoppingCart;
