import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="w-full">
      <header className="max-w-[1440px] m-auto px-[5%] ">
        <h2 className="text-3xl">EcommCenter</h2>
        <MenuIcon className="w-5" />
        <XIcon className="w-5" />
      </header>
    </div>
  );
};

export default Header;
