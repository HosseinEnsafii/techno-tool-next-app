import "../config/axios";
import Layout from "../layout";
import { Provider } from "react-redux";
import store from "../redux/store";

// SWIPER CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
