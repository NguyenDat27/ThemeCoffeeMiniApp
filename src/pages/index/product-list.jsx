import { Suspense } from "react";
import PropTypes from "prop-types";
import Section from "../../components/section";
import { Box } from "zmp-ui";
import ProductItem from "../../components/product/item";
import { ProductItemSkeleton } from "../../components/skeletons";
import { mergeData } from "../../hooks/hooks";
import { useProducts } from "../../store/productStore";
import { useVariants } from "../../store/variantStore";

const ProductListContent = () => {
  
  const [products] = useProducts.products();
  const [variants] = useVariants.variants();

  const product = mergeData(products, variants)

  return (
    <Section title="Danh sách sản phẩm">
      <Box className="grid grid-cols-2 gap-4">
        {product.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box>
    </Section>
  );
};

const ProductListFallback = () => {
  const products = [...new Array(12)];

  return (
    <Section title="Danh sách sản phẩm">
      <Box className="grid grid-cols-2 gap-4">
        {products.map((_, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Box>
    </Section>
  );
};

const ProductList = () => {
  return (
    <Suspense fallback={<ProductListFallback />}>
      <ProductListContent />
    </Suspense>
  );
};

ProductListContent.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
