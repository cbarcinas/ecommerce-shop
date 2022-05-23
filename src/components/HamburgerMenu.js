import React from "react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/outline";

const HamburgerMenu = (props) => {
  // Destructure props from <Header/>
  const { toggleMenu, toggleHamburgerMenu } = props;

  return (
    <>
      {toggleMenu ? (
        <>
          <div>
            <XIcon className="w-5" onClick={toggleHamburgerMenu} />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">
                  <UserCircleIcon className="w-6"></UserCircleIcon>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ShoppingCartIcon className="w-6"></ShoppingCartIcon>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </>
  );
};

export default HamburgerMenu;
