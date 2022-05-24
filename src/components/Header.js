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
    <div className="w-full fixed top-0 z-0">
      <header className="flex justify-between max-w-[1440px] my-4 px-[5%]">
        <Link to="/">
          <h2 className="text-2xl">Ecomm</h2>
        </Link>
        <div className="flex">
          <Link to="/cart">
            <ShoppingCartIcon className="w-7"></ShoppingCartIcon>
          </Link>
          <MenuIcon
            className="w-7 ml-3 items-center"
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
