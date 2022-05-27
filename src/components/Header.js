import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";

import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  // Set state for hamburger menu visibility
  const [toggleMenu, setToggleMenu] = useState(false);

  // change state of hamburger menu visibility
  const toggleHamburgerMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="w-full fixed top-0 z-0 bg-slate-300 text-stone-900 ">
      <header className="flex justify-between max-w-[1440px] my-5 m-auto px-[5%] ">
        <Link to="/">
          <h2 className="text-2xl font-semibold">Ecomm</h2>
        </Link>
        <div className="flex">
          <Link to="/cart">
            <ShoppingCartIcon className="w-7 cursor-pointer"></ShoppingCartIcon>
          </Link>
          <MenuIcon
            className="w-7 ml-3 items-center cursor-pointer"
            onClick={toggleHamburgerMenu}
          />
        </div>
      </header>
      {toggleHamburgerMenu ? (
        <>
          <HamburgerMenu
            toggleMenu={toggleMenu}
            toggleHamburgerMenu={toggleHamburgerMenu}
          />
        </>
      ) : null}
    </div>
  );
};

export default Header;
