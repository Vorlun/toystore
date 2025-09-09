import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[640px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-[570px] h-[308px] bg-white rounded-2xl px-17 py-14 flex flex-col justify-between items-center">
        <p className="text-[#A5C926] font-normal text-[13px] leading-4">
          Say Hello to ToyStore!
        </p>
        <p className="text-[#111] text-[39px] text-center">
          Free Ecommerce Template for Webflow
        </p>
        <button className="py-3 px-7 bg-[#A5C926] rounded-full text-white font-normal text-[14px]">Open Catalog</button>
      </div>
    </div>
  );
};

export default Hero;
