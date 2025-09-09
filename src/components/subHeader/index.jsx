import React, { useMemo, useCallback } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SubHeader = () => {
  const socialIcons = useMemo(
    () => [
      { id: "twitter", icon: <FaTwitter /> },
      { id: "facebook", icon: <FaFacebookSquare /> },
      { id: "instagram", icon: <FaInstagram /> },
      { id: "pinterest", icon: <FaPinterest /> },
      { id: "youtube", icon: <FaYoutube /> },
    ],
    []
  );

  const handleClick = useCallback((platform) => {
    console.log(`${platform} clicked`);
  }, []);

  return (
    <div className="bg-[#A5C926] w-full text-white py-[5px]">
      <div className="container flex justify-between">
        <div className="flex text-[10px] leading-4 font-normal gap-4">
          <p>Call Us: +1 213 974-5898</p>
          <p>Email: toystore@template.com</p>
        </div>

        <div className="flex gap-[10px]">
          {socialIcons.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="hover:text-gray-200 transition-colors"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SubHeader);
