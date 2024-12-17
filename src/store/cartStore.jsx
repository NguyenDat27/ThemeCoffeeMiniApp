import createStore from 'teaful';

export const { useStore: useCartItems } = createStore({
    cartItems: [],
});
  