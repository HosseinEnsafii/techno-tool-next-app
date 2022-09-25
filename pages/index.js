import { getProducts } from "../datalayer/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/slices/homeSlice";
import { getHomeData } from "../datalayer/home";
import Hero from "../components/Home/Hero/Hero";

export default function Home({ homeData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(homeData));
  }, []);

  return (
    <div className="w-full">
      <Hero />
    </div>
  );
}

export async function getStaticProps() {
  const homeData = await getHomeData();
  return {
    props: {
      homeData,
    },
  };
}
