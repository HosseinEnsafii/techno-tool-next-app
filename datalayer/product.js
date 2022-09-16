import axios from "axios";
import qs from "qs";
import productReducer from "../datareducers/productReducer";
export async function getProducts() {
  const query = qs.stringify({
    populate: ["category", "category.parent", "images"],
  });
  const res = await axios.get(`products?${query}`);
  const rawProducts = res.data.data;
  const products = rawProducts.map((rawProduct) => productReducer(rawProduct));
  return products;
}
