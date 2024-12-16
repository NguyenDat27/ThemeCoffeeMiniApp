import { App, ZMPRouter, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import { getConfig } from "../utils/config";
import Layout from "./layout";
import { ConfigProvider } from "./config-provider";
import { useStore } from "../store/store";
import { useEffect } from "react";
import bannerData from "../data/banner.json"
import categoryData from "../data/categories.json"
import productData from "../data/products.json"
import variantsData from "../data/variants.json"
import { notificationData } from "../data/notification";

const MyApp = () => {

  const [banner, setBanner] = useStore.banners();
  const [category, setCategory] = useStore.categorys();
  const [product, setProduct] = useStore.products();
  const [variant, setVariant] = useStore.variants();
  const [notification, setNotification] = useStore.notifications();

  useEffect(() => {
    console.log(banner);
    setBanner(bannerData);
    
    console.log(category);
    setCategory(categoryData);

    console.log(product);
    setProduct(productData);

    console.log(variant);
    setVariant(variantsData);

    console.log(notification);
    setNotification(notificationData);
  }, [])

  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          "--zmp-primary-color": getConfig((c) => c.template.primaryColor),
          "--zmp-background-color": "#f4f5f6",
        }}
      >
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <Layout />
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;