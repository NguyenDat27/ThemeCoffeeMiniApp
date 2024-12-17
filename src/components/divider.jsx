import { Box } from "zmp-ui";

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