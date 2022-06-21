import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MenuIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";

import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  // Set state for hamburger menu visibility
  const [toggleMenu, setToggleMenu] = useState(false);

  // Get the cart quantity from the redux store
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  // Change state of hamburger menu visibility
  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="w-full fixed top-0 bg-slate-300 text-stone-900 ">
      <header className="flex justify-between max-w-[1440px] my-3 m-auto px-[5%] ">
        <Link to="/">
          <h2 className="text-2xl font-semibold">Ecomm</h2>
        </Link>
        <div className="flex">
          <span className="text-sm">{cartTotalQuantity}</span>
          <Link to="/cart">
            <ShoppingBagIcon className="w-9 items-center cursor-pointer"></ShoppingBagIcon>
          </Link>
          <MenuIcon
            className="w-9 ml-3 items-center cursor-pointer"
            onClick={toggle}
          />
        </div>
      </header>
      {toggle ? (
        <>
          <HamburgerMenu toggleMenu={toggleMenu} toggle={toggle} />
        </>
      ) : null}
    </div>
  );
};

export default Header;
