import { configureStore } from "@reduxjs/toolkit";
import { homeReducer, uiReducer } from "./slices";

const store = configureStore({
  reducer: {
    homeState: homeReducer,
    uiState: uiReducer,
  },
});

export default store;
