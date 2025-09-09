import React from "react";

const Toys = ({ title, toys }) => {
    console.log(title);
    console.log(toys);
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between border-b border-[#ddd] pb-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <button className="text-sm text-[#A5C926] hover:underline">
          See All Toys
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toys?.map((toy, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col items-center"
          >
            <img
              src={toy.img}
              alt={toy.name}
              className="w-48 h-48 object-cover mb-6"
            />
            <div className="p-4">
              <p className="text-gray-800 font-medium mb-3">{toy.name}</p>
              <p className="bg-[#A5C926] text-white font-normal text-[12px] py-[2px] px-3 rounded-full mb-5">
                ${toy.price}.00 USD
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Toys);
