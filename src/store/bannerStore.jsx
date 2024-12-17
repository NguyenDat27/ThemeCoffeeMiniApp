import createStore from 'teaful';

export const { useStore: useBanners } = createStore({
    banners: [],
});