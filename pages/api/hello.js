import { getAllBrands } from "../../datalayer/brand";
import { getProducts } from "../../datalayer/product";
export default async function handler(req, res) {
  const data = await getProducts();
  // const data = await getAllBrands();
  res.status(200).json(data);
}
