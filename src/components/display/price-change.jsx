import { useMemo } from "react";
import PropTypes from "prop-types";
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

DisplayPriceChange.propTypes = {
  children: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
  option: PropTypes.shape({
    priceChange: PropTypes.shape({
      type: PropTypes.oneOf(["fixed", "percent"]).isRequired,
      amount: PropTypes.number,
      percent: PropTypes.number,
    }),
  }).isRequired,
};
