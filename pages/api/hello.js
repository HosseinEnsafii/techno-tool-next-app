import { getAllBrands } from "../../datalayer/brand";
import { getHomeData } from "../../datalayer/home";
import { getProducts } from "../../datalayer/product";
export default async function handler(req, res) {
  // const data = await getProducts();
  // const data = await getAllBrands();
  const data = await getHomeData();
  res.status(200).json(data);
}
