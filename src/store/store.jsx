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
        stores: [],
        selectStore: [],
        notes: "",
        deliveryTime: 0,
        user: "",
        phone: "",
    },
)

