import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    openDrawer: false,
    theme: "light",
  },
  reducers: {
    toggleDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    },
    closeDrawer: (state) => {
      state.openDrawer = false;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const { closeDrawer, setTheme, toggleDrawer } = uiSlice.actions;
