import createStore from 'teaful';

export const { useStore: useUserInfo } = createStore({
    user: "",
    phone: "",
});