import { useMemo } from "react";
import { DisplayPrice } from "./price";

export const DisplayPriceChange = ({ children, option }) => {
  const changes = useMemo(
    () =>
      option.priceChange
        ? option.priceChange.type === "fixed"
          ? option.priceChange.amount
          : children.price * option.priceChange.percent
        : 0,
    [children, option]
  );

  return (
    <>
      {changes > 0 && "+"}
      <DisplayPrice>{changes}</DisplayPrice>
    </>
  );
};

