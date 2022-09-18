import imageReducer from "./imageReducer";
import productReducer from "./productReducer";

function homeReducer({ attributes }) {
  //   const { incredible_products, new_products } = attributes;
  const incredible_products = attributes.incredible_products.data.map(
    (iProduct) => productReducer(iProduct)
  );

  const new_products = attributes.new_products.data.map((nProduct) =>
    productReducer(nProduct)
  );

  const best_prices = attributes.best_prices.data.map((bProduct) =>
    productReducer(bProduct)
  );

  const hero_banners = attributes.hero_banners.data.map((banner) =>
    imageReducer(banner)
  );

  return {
    incredible_products,
    new_products,
    best_prices,
    hero_banners,
  };
}
export default homeReducer;
