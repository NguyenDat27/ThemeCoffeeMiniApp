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
        
    },
)

