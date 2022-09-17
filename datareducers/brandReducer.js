import imageReducer from "./imageReducer";

export default function ({ attributes, id }) {
  return {
    ...attributes,
    logo: imageReducer(attributes.logo.data),
    id,
  };
}
