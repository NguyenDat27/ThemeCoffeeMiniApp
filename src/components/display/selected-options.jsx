import { useMemo } from "react";
import PropTypes from "prop-types";

export const DisplaySelectedOptions = ({ children, options }) => {
  const description = useMemo(() => {
    let variants = [];
    if (children.variants) {
      const selectedVariants = Object.keys(options);
      children.variants
        .filter((v) => selectedVariants.includes(v.id))
        .forEach((variant) => {
          if (variant.type === "single") {
            const selectedOption = variant.options.find(
              (o) => o.id === options[variant.id]
            );
            if (selectedOption) {
              variants.push(
                `${variant.label || variant.id}: ${
                  selectedOption.label || selectedOption.id
                }`
              );
            }
          } else {
            const selectedOptions = variant.options.filter((o) =>
              options[variant.id].includes(o.id)
            );
            variants.push(
              `${variant.label || variant.id}: ${selectedOptions
                .map((o) => o.label || o.id)
                .join(", ")}`
            );
          }
        });
    }
    return variants.join(". ");
  }, [children, options]);

  return <>{description}</>;
};

DisplaySelectedOptions.propTypes = {
  children: PropTypes.shape({
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        label: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string,
          })
        ).isRequired,
      })
    ),
  }).isRequired,
  options: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])).isRequired,
};

