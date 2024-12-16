import Divider from "../../components/divider";
import { Header, Page } from "zmp-ui";
import { CartItems } from "./cart-items";
import CartPreview from "./preview";
import TermsAndPolicies from "./term-and-policies";
import Delivery from "./delivery";
import { useVirtualKeyboardVisible } from "../../hooks/hooks";
import { useStore } from "../../store/store";

const CartPage = () => {
  const keyboardVisible = useVirtualKeyboardVisible();
  
  const [cart] = useStore.cartItems();
  console.log(cart);

  return (
    <Page className="flex flex-col">
      <Header title="Giỏ hàng" showBackIcon={false} />
      <CartItems />
      <Delivery />
      <Divider size={12} />
      <TermsAndPolicies />
      <Divider size={32} className="flex-1" />
      {!keyboardVisible && <CartPreview />}
    </Page>
  );
};

export default CartPage;
