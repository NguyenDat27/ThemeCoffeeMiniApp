import createStore from 'teaful';

export const { useStore: useCategories } = createStore({
    categories: [],
    selectedCategory: "coffee",
});