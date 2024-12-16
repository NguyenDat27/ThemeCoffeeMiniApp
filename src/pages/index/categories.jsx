import PropTypes from "prop-types";
import { Box, Text } from "zmp-ui";
import { useNavigate } from "react-router";
import { useStore } from "../../store/store";
import { useState } from "react";

const Categories = () => {
  const [categories] = useStore.categorys();
  const navigate = useNavigate();
  const [selectCategoryId, setSelectedCategoryId] = useState("coffee");

  console.log(categories);
  console.log(selectCategoryId);

  const gotoCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    navigate("/category");
  };

  return (
    <Box className="bg-white grid grid-cols-4 gap-4 p-4">
      {categories.map((category, i) => (
        <div
          key={i}
          onClick={() => gotoCategory(category.id)}
          className="flex flex-col space-y-2 items-center"
        >
          <img className="w-12 h-12" src={category.icon} alt={category.name} />
          <Text size="xxSmall" className="text-gray">
            {category.name}
          </Text>
        </div>
      ))}
    </Box>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

export default Categories;
