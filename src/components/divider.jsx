import { Box } from "zmp-ui";
import PropTypes from "prop-types";

const Divider = ({ size = 8, className, ...props }) => {
  return (
    <Box
      className={className}
      style={{
        minHeight: size,
        backgroundColor: "var(--zmp-background-color)",
      }}
      {...props}
    />
  );
};

export default Divider;

Divider.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};