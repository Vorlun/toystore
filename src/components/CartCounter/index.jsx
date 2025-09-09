import React from "react";

const CartCounter = React.memo(({ count }) => {
  return (
    <span className="bg-[#A5C926] flex justify-center items-center text-white size-5 p-2 rounded-full text-sm">
      {count}
    </span>
  );
});

export default CartCounter;
