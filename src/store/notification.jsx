import createStore from 'teaful';

export const { useStore: useNotifications } = createStore({
    notification: [],
});