import { useMemo } from "react";
import { calcFinalPrice } from "../../utils/product";
import { DisplayPrice } from "./price";

export const FinalPrice = ({ children, options }) => {
  const finalPrice = useMemo(
    () => calcFinalPrice(children, options),
    [children, options]
  );
  return <DisplayPrice>{finalPrice}</DisplayPrice>;
};

