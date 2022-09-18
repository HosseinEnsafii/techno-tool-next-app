import { getAllBrands } from "../datalayer/brand";
import { getProducts } from "../datalayer/product";
import Image from "next/image";
export default function Home({ products }) {
  console.log(products);
  return <div className="w-full "></div>;
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}
