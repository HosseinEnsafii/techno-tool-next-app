import axios from "axios";

export async function getProducts() {
  const res = await axios.get("products");
  const rawProducts = res.data.data;
  return rawProducts;
}
