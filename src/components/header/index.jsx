import React, { useState, useCallback, useMemo, Suspense } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const CartCounter = React.lazy(() => import("../CartCounter"));

const Header = () => {
  const [count] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const navItems = useMemo(
    () => [
      { path: "/catalog", label: "Catalog" },
      { path: "/delivery", label: "Delivery" },
      { path: "/about", label: "About" },
      { path: "/contacts", label: "Contacts" },
    ],
    []
  );

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <div className="container flex items-center">
        <div className="py-5 px-4">
          <h1 className="text-[#333333] text-[21px] leading-8 font-normal">
            ToyStore
          </h1>
        </div>

        <div className="flex items-center justify-between w-full">
          <nav className="hidden md:flex text-[#111] text-[14px] font-normal px-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-[#A5C926] transition-colors duration-200 px-4 py-3"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 cursor-pointer">
            <MdOutlineShoppingCart className="text-2xl text-[#222]" />
            <Suspense fallback={<span className="text-sm">0</span>}>
              <CartCounter count={count} />
            </Suspense>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-[#A5C926] transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
