import axios from "axios";
import qs from "qs";
import homeReducer from "../datareducers/homeReducer";
export async function getHomeData() {
  const query = qs.stringify({
    populate: [
      "incredible_products",
      "incredible_products.images",
      "new_products",
      "new_products.images",
      "best_prices",
      "best_prices.images",
    ],
  });
  const res = await axios.get(`home-page?${query}`);
  const homeRaw = res.data;
  console.log(homeRaw);
  const homeData = homeReducer(homeRaw.data);
  return homeData;
}
