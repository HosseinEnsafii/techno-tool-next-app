import axios from "axios";

export const getAllBrands = async () => {
  const brandsRaw = await (await axios.get("brands")).data;
  return brandsRaw;
};
