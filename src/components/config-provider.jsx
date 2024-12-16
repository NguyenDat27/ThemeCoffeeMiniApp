import { useEffect } from "react";
import PropTypes from "prop-types";

export const ConfigProvider = ({ children, cssVariables }) => {
  useEffect(() => {
    Object.keys(cssVariables)
      .filter((cv) => cssVariables[cv])
      .forEach((cv) => {
        document.documentElement.style.setProperty(`${cv}`, cssVariables[cv]);
      });
    return () => {
      Object.keys(cssVariables).forEach((cv) => {
        document.documentElement.style.removeProperty(`${cv}`);
      });
    };
  }, [cssVariables]);

  return <>{children}</>;
};

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
  cssVariables: PropTypes.object.isRequired,
};
