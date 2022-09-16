import categoryReducer from "./categoryReducer";
import imageReducer from "./imageReducer";

const productReducer = ({ attributes, id }) => {
  const product = { ...attributes, id };
  product.images = attributes.images.data.map((image) => imageReducer(image));
  product.category = categoryReducer(attributes.category.data);
  return product;
};
export default productReducer;
