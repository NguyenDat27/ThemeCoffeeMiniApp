import { useMemo } from "react";
import PropTypes from "prop-types";
import { calcFinalPrice } from "../../utils/product";
import { DisplayPrice } from "./price";

export const FinalPrice = ({ children, options }) => {
  const finalPrice = useMemo(
    () => calcFinalPrice(children, options),
    [children, options]
  );
  return <DisplayPrice>{finalPrice}</DisplayPrice>;
};


FinalPrice.propTypes = {
  children: PropTypes.object.isRequired,
  options: PropTypes.object,
};
