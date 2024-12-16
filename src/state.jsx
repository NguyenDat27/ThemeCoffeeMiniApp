import { atom, selector, selectorFamily } from "recoil";
import { getLocation, getPhoneNumber, getUserInfo } from "zmp-sdk";
import categories from "./data/categories.json";
import { calculateDistance } from "./utils/location";
import { calcFinalPrice } from "./utils/product";
import { wait } from "./utils/async";

export const userState = selector({
  key: "user",
  get: async () => {
    const { userInfo } = await getUserInfo({ autoRequestPermission: true });
    return userInfo;
  },
});

export const categoriesState = selector({
  key: "categories",
  get: () => categories,
});

export const productsState = selector({
  key: "products",
  get: async () => {
    await wait(2000);
    const products = (await import("./data/products.json")).default;
    const variants = (await import("./data/variants.json")).default;
    return products.map(
      (product) =>
        ({
          ...product,
          variants: variants.filter((variant) =>
            product.variantId.includes(variant.id)
          ),
        })
    );
  },
});

export const recommendProductsState = selector({
  key: "recommendProducts",
  get: ({ get }) => {
    const products = get(productsState);
    return products.filter((p) => p.sale);
  },
});

export const selectedCategoryIdState = atom({
  key: "selectedCategoryId",
  default: "coffee",
});

export const productsByCategoryState = selectorFamily({
  key: "productsByCategory",
  get:
    (categoryId) =>
    ({ get }) => {
      const allProducts = get(productsState);
      return allProducts.filter((product) =>
        product.categoryId.includes(categoryId)
      );
    },
});

export const cartState = atom({
  key: "cart",
  default: [],
});

export const totalQuantityState = selector({
  key: "totalQuantity",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
});

export const totalPriceState = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce(
      (total, item) =>
        total + item.quantity * calcFinalPrice(item.product, item.options),
      0
    );
  },
});

export const storesState = atom({
  key: "stores",
  default: [
    {
      id: 1,
      name: "VNG Campus Store",
      address:
        "Khu chế xuất Tân Thuận, Z06, Số 13, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
      lat: 10.741639,
      long: 106.714632,
    },
    {
      id: 2,
      name: "The Independence Palace",
      address:
        "135 Nam Kỳ Khởi Nghĩa, Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      lat: 10.779159,
      long: 106.695271,
    },
    {
      id: 3,
      name: "Saigon Notre-Dame Cathedral Basilica",
      address:
        "1 Công xã Paris, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      lat: 10.779738,
      long: 106.699092,
    },
    {
      id: 4,
      name: "Bình Quới Tourist Village",
      address:
        "1147 Bình Quới, phường 28, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam",
      lat: 10.831098,
      long: 106.733128,
    },
    {
      id: 5,
      name: "Củ Chi Tunnels",
      address: "Phú Hiệp, Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
      lat: 11.051655,
      long: 106.494249,
    },
  ],
});

export const nearbyStoresState = selector({
  key: "nearbyStores",
  get: ({ get }) => {
    const location = get(locationState);
    const stores = get(storesState);

    if (location) {
      const storesWithDistance = stores.map((store) => ({
        ...store,
        distance: calculateDistance(
          location.latitude,
          location.longitude,
          store.lat,
          store.long
        ),
      }));

      const nearbyStores = storesWithDistance.sort(
        (a, b) => a.distance - b.distance
      );

      return nearbyStores;
    }
    return [];
  },
});

export const selectedStoreIndexState = atom({
  key: "selectedStoreIndex",
  default: 0,
});

export const selectedStoreState = selector({
  key: "selectedStore",
  get: ({ get }) => {
    const index = get(selectedStoreIndexState);
    const stores = get(nearbyStoresState);
    return stores[index];
  },
});

export const selectedDeliveryTimeState = atom({
  key: "selectedDeliveryTime",
  default: +new Date(),
});

export const requestLocationTriesState = atom({
  key: "requestLocationTries",
  default: 0,
});

export const requestPhoneTriesState = atom({
  key: "requestPhoneTries",
  default: 0,
});

export const locationState = selector({
  key: "location",
  get: async ({ get }) => {
    const requested = get(requestLocationTriesState);
    if (requested) {
      const { latitude, longitude, token } = await getLocation({
        fail: console.warn,
      });
      if (latitude && longitude) {
        return { latitude, longitude };
      }
      if (token) {
        console.warn(
          "Sử dụng token này để truy xuất vị trí chính xác của người dùng",
          token
        );
        console.warn(
          "Chi tiết tham khảo: ",
          "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app"
        );
        console.warn("Giả lập vị trí mặc định: VNG Campus");
        return {
          latitude: "10.7287",
          longitude: "106.7317",
        };
      }
    }
    return false;
  },
});

export const phoneState = selector({
  key: "phone",
  get: async ({ get }) => {
    const requested = get(requestPhoneTriesState);
    if (requested) {
      try {
        const { number, token } = await getPhoneNumber({ fail: console.warn });
        if (number) {
          return number;
        }
        console.warn(
          "Sử dụng token này để truy xuất số điện thoại của người dùng",
          token
        );
        console.warn(
          "Chi tiết tham khảo: ",
          "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app"
        );
        console.warn("Giả lập số điện thoại mặc định: 0337076898");
        return "0337076898";
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    return false;
  },
});

export const orderNoteState = atom({
  key: "orderNote",
  default: "",
});
