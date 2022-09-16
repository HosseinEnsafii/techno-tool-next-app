import axios from "axios";
import qs from "qs";
import brandReducer from "../datareducers/brandReducer";

export const getAllBrands = async () => {
  const query = qs.stringify({
    populate: ["logo"],

    encodeValuesOnly: true,
  });
  const res = await axios.get(`/brands?${query}`);
  const brandsRaw = res.data.data;
  const brands = brandsRaw.map((brandRaw) => brandReducer(brandRaw));
  return brandsRaw;
};
