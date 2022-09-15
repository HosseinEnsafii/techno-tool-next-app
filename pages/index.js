import { getAllBrands } from "../datalayer/brand";

export default function Home({ brands }) {
  console.log(brands);
  return <div className="w-full "></div>;
}

export async function getStaticProps() {
  const brands = await getAllBrands();
  console.log(brands);
  return {
    props: {
      brands,
    },
  };
}
