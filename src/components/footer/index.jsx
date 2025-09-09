import React, { useCallback, useMemo } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = useMemo(
    () => [
      { path: "/catalog", label: "Catalog" },
      { path: "/delivery", label: "Delivery" },
      { path: "/about", label: "About" },
      { path: "/contacts", label: "Contacts" },
    ],
    []
  );

  const socialIcons = useMemo(
    () => [
      { id: "twitter", icon: <FaTwitter />, url: "https://twitter.com" },
      {
        id: "facebook",
        icon: <FaFacebookSquare />,
        url: "https://facebook.com",
      },
      { id: "instagram", icon: <FaInstagram />, url: "https://instagram.com" },
      { id: "pinterest", icon: <FaPinterest />, url: "https://pinterest.com" },
      { id: "youtube", icon: <FaYoutube />, url: "https://youtube.com" },
    ],
    []
  );

  const handleClick = useCallback((url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <footer className="bg-[#A5C926] w-full text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-6">
        <h1 className="text-white text-[21px] leading-8 font-normal">
          ToyStore
        </h1>

        <nav className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-gray-200 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          {socialIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.url)}
              className="hover:text-gray-200 transition-colors text-lg"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-white/50"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-xs gap-2">
        <div className="text-center md:text-left">
          <p>Created with love by Elastic Themes</p>
        </div>
        <div className="text-center md:text-right">
          <p>Powered by Webflow • Style Guide • Licensing</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
