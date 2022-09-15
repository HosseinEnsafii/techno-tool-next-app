import imageReducer from "./imageReducer";

export default function ({ attributes }) {
  return {
    name_fa: attributes.name_fa,
    name_en: attributes.name_en,
    logo: imageReducer(attributes.logo),
  };
}
