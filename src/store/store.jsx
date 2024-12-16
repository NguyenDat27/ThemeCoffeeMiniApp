import createStore from 'teaful';

export const {useStore} = createStore(
    {
        banners: [],
        categories: [],
        selectedCategory: "coffee",
        products: [],
        variants: [],
        notification: [],
        keyword: "",
        cartItems: [],
        totalPrice: 0,
        quantity: 0,
    },
)

