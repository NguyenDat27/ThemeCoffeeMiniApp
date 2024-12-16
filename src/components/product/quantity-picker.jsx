import PropTypes from "prop-types";
import { Box, Button, Icon, Text } from "zmp-ui";

const QuantityPicker = ({ value, onChange }) => {
  return (
    <Box flex className="border border-[#e9ebed] rounded-full p-[6px]">
      <Button
        disabled={value < 1}
        onClick={() => onChange(value - 1)}
        variant="secondary"
        type="neutral"
        icon={
          <div className="py-3 px-1">
            <div className="w-full h-[2px] bg-black" />
          </div>
        }
      />
      <Box flex justifyContent="center" alignItems="center" className="flex-1">
        <Text size="large" className="font-medium">
          Số lượng: {value}
        </Text>
      </Box>
      <Button
        onClick={() => onChange(value + 1)}
        variant="secondary"
        type="neutral"
        icon={<Icon icon="zi-plus" />}
      />
    </Box>
  );
};

QuantityPicker.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuantityPicker;
