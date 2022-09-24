import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    openDrawer: false,
  },
  reducers: {
    toggleDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    },
    closeDrawer: (state) => {
      state.openDrawer = false;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = { ...uiSlice.actions };
