import React, { useCallback } from "react";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";

const Category = () => {
  const handleClick = useCallback((title) => {
    console.log(`${title} clicked`);
  }, []);

  return (
    <div className="container flex flex-col md:flex-row justify-between gap-6 py-30">
      <div className="w-full md:w-[570px] h-[188px] bg-[#FFC12C] flex items-center justify-start rounded-lg relative overflow-visible px-6">
        <img src={c1} alt="Stuffed Animals" className="-mt-7 md:-mt-10" />
        <div>
          <h3 className="text-white font-normal text-3xl mb-3">
            Stuffed Animals
          </h3>
          <button
            onClick={() => handleClick("Stuffed Animals")}
            className="py-2 px-6 rounded-full text-[13px] bg-white text-black"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full md:w-[570px] h-[188px] bg-[#FB416B] flex items-center justify-end rounded-lg relative overflow-visible px-6">
        <div className="flex flex-col items-end">
          <h3 className="text-white font-normal text-3xl mb-3">Wooden Toys</h3>
          <button
            onClick={() => handleClick("Wooden Toys")}
            className="py-2 px-6 rounded-full text-[13px] bg-white text-black"
          >
            Shop Now
          </button>
        </div>
        <img src={c2} alt="Wooden Toys" className="-mt-7 md:-mt-10" />
      </div>
    </div>
  );
};

export default React.memo(Category);
