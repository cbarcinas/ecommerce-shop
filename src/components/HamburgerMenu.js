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
          <div className="absolute h-screen bg-slate-500 inset-0">
            <div className="text-white ">
              <XIcon className="w-7" onClick={toggleHamburgerMenu} />
              {/* user icons */}
              <div>
                <ul>
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
