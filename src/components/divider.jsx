import { Box } from "zmp-ui";
import styled from "styled-components";

const StyledBox = styled(Box)`
  min-height: ${(props) => props.size || 8}px;
  background-color: var(--zmp-background-color);
`;

const Divider = ({ size = 8, className, ...props }) => {
  return (
    <StyledBox
      size={size}
      className={className}
      {...props}
    />
  );
};

export default Divider;
