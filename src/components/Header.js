import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  // Set state for hamburger menu visibility
  const [toggleMenu, setToggleMenu] = useState(false);

  // change state of hamburger menu visibility
  const toggleHamburgerMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="w-full">
      <header className="max-w-[1440px] m-auto px-[5%] ">
        <h2 className="text-3xl">EcommCenter</h2>
        <MenuIcon className="w-5" onClick={toggleHamburgerMenu} />
        <XIcon className="w-5" />
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
