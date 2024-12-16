// Import React and ReactDOM
import { createRoot } from "react-dom/client";

// Import global styles
import "swiper/css";
import "swiper/css/pagination";
import "zmp-ui/zaui.css";
import "./css/tailwind.css";
import "./css/app.scss";

// Import App Component
import App from "./components/app";
import appConfig from "../app-config.json";

// Initialize app configuration
if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById("app"));
root.render(<App />);
