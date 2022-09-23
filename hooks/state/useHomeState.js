import { useSelector } from "react-redux";

const useHomeState = () => {
  const { incredible_products, new_products, best_prices, hero_banners } =
    useSelector((state) => state.homeState);

  return { incredible_products, new_products, best_prices, hero_banners };
};
export default useHomeState;
