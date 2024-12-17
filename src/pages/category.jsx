import { Suspense } from "react";
import PropTypes from "prop-types";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";
import ProductItem from "../components/product/item";
import { useStore } from "../store/store";

const CategoryPicker = () => {
  const [selectedCategory] = useStore.selectedCategory();
  const [categories] = useStore.categories();
  
  return (
    <Tabs
      scrollable
      defaultActiveKey={selectedCategory}
      className="category-tabs"
    >
      {categories.map((category) => (
        <Tabs.Tab key={category.id} label={category.name}>
          <Suspense>
            <CategoryProducts categoryId={category.id} />
          </Suspense>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
};

const CategoryProducts = ({ categoryId }) => {

  const products = useStore.products();
  const productsByCategory = products.filter((product) =>
        product.categoryId.includes(categoryId)
      );

  if (productsByCategory.length === 0) {
    return (
      <Box className="flex-1 bg-background p-4 flex justify-center items-center">
        <Text size="xSmall" className="text-gray">
          Không có sản phẩm trong danh mục
        </Text>
      </Box>
    );
  }
  return (
    <Box className="bg-background grid grid-cols-2 gap-4 p-4">
      {productsByCategory.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Box>
  );
};

CategoryProducts.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

const CategoryPage = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Danh mục" />
      <CategoryPicker />
    </Page>
  );
};

export default CategoryPage;
