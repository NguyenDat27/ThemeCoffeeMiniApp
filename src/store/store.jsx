import createStore from 'teaful';

export const {useStore} = createStore(
    {
        banners: [],
        categorys: [],
        products: [],
        variants: [],
        notification: [],
        keyword: "",
    },
)

