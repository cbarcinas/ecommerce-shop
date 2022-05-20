import React from "react";
import { XIcon } from "@heroicons/react/outline";

const HamburgerMenu = (props) => {
  // Destructure props from <Header/>
  const { toggleMenu, toggleHamburgerMenu } = props;

  return (
    <>
      {toggleMenu ? (
        <div>
          <XIcon className="w-5" onClick={toggleHamburgerMenu} />
        </div>
      ) : null}
    </>
  );
};

export default HamburgerMenu;
