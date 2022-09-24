import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incredible_products: [],
  new_products: [],
  best_prices: [],
  hero_banners: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getData: (state, action) => {
      return { ...action.payload };
    },
  },
});

export default homeSlice.reducer;
export const homeActions = { ...homeSlice.actions };
