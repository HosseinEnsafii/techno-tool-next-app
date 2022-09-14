import { getAllBrands } from "../datasouce/brand";

export default function Home({ brands }) {
  return <div className="w-full "></div>;
}

export async function getStaticProps() {
  const brands = await getAllBrands();

  return {
    props: {
      brands,
    },
  };
}
