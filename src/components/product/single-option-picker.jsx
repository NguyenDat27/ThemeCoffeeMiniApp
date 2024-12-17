import { Box, Radio, Text } from "zmp-ui";

const SingleOptionPicker = ({ variant, value, onChange }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption); // Gọi onChange chỉ một lần
  };

  return (
    <Box my={8} className="space-y-2">
      <Text.Title size="small">{variant.label}</Text.Title>
      <Radio.Group
        className="flex-1 grid grid-cols-3 justify-between"
        name={variant.id}
        options={variant.options.map((option) => ({
          value: option.id,
          label: option.label,
        }))}
        value={value}
        onChange={handleChange} 
      />
    </Box>
  );
};

export default SingleOptionPicker;
