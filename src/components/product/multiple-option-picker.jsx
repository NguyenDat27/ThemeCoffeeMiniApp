import { DisplayPriceChange } from "../../components/display/price-change";
import { Box, Checkbox, Text } from "zmp-ui";

const MultipleOptionPicker = ({ product, variant, value, onChange }) => {
  const handleChange = (selectedOptions) => {
    onChange(selectedOptions); // Call the passed-in onChange handler
  };

  return (
    <Box my={8} className="space-y-2">
      <Text.Title size="small">{variant.label}</Text.Title>
      <Checkbox.Group
        className="flex flex-col space-y-2"
        name={variant.id}
        options={variant.options.map((option) => ({
          className: "last-of-type:mr-2",
          value: option.id,
          label: (
            <div className="w-full">
              <span className="flex-1">{option.label}</span>
              <span className="absolute right-0">
                <DisplayPriceChange option={option}>
                  {product}
                </DisplayPriceChange>
              </span>
            </div>
          ),
        }))}
        value={value} 
        onChange={handleChange}
      />
    </Box>
  );
};


export default MultipleOptionPicker;
