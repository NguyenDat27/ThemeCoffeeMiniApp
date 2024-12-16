import { Box, Button, Text } from "zmp-ui";
import { DisplayPrice } from "../../components/display/price";
import pay from "../../utils/product";
import { useStore } from "../../store/store";
import { calcFinalPrice } from "../../utils/product";

const CartPreview = () => {
  const [cartItems] = useStore.cartItems();
  console.log(cartItems)

  const quantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice =   cartItems.reduce((total, item) =>
      total + item.quantity * calcFinalPrice(item.product, item.options),
    0
  );

  return (
    <Box flex className="sticky bottom-0 bg-background p-4 space-x-4">
      <Box
        flex
        flexDirection="column"
        justifyContent="space-between"
        className="min-w-[120px] flex-none"
      >
        <Text className="text-gray" size="xSmall">
          {quantity} sản phẩm
        </Text>
        <Text.Title size="large">
          <DisplayPrice>{totalPrice}</DisplayPrice>
        </Text.Title>
      </Box>
      <Button
        type="highlight"
        disabled={!quantity}
        fullWidth
        onClick={() => pay(totalPrice)}
      >
        Đặt hàng
      </Button>
    </Box>
  );
};

export default CartPreview;
