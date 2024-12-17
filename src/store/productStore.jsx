import createStore from 'teaful';

export const { useStore: useProducts } = createStore({
    products: [],
    keyword: "",
});