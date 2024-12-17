import createStore from 'teaful';

export const { useStore: useNotes } = createStore({
    notes: "",
    deliveryTime: +new Date(),
});