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
          <div className="absolute h-screen bg-slate-700 inset-0">
            <div className="m-auto text-center text-white text-6xl tracking-wider">
              <XIcon
                className="w-9 absolute top-4 right-4"
                onClick={toggleHamburgerMenu}
              />
              {/* user icons */}
              <div>
                <ul className="mt-[2.5em]">
                  <li>
                    <Link to="/">
                      <UserCircleIcon className="w-9 m-auto my-7"></UserCircleIcon>
                    </Link>
                  </li>

                  <li>
                    <Link to="/cart">
                      <ShoppingCartIcon className="w-9 m-auto my-4"></ShoppingCartIcon>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* end user icons */}
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default HamburgerMenu;
