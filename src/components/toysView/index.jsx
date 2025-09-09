import React, { useMemo } from "react";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import Toys from "../toys";

const ToysView = () => {
  const t1 = useMemo(
    () => [
      { name: "Brown Bear", img: c1, price: 30 },
      { name: "Cute Bunny", img: c1, price: 28 },
      { name: "Teddy Classic", img: c1, price: 35 },
      { name: "Soft Panda", img: c1, price: 40 },
    ],
    []
  );

  const t2 = useMemo(
    () => [
      { name: "Happy Flower", img: c2, price: 38 },
      { name: "Sunshine Flower", img: c2, price: 42 },
      { name: "Bloomy Toy", img: c2, price: 36 },
      { name: "Rose Plush", img: c2, price: 50 },
    ],
    []
  );

  return (
    <>
      <Toys title="Stuffed Animals" toys={t1} />
      <Toys title="Wooden Toys" toys={t2} />
    </>
  );
};

export default React.memo(ToysView);
