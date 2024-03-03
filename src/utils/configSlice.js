import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "configSlice",
  initialState: {
    lang: "en",
  },
  reducers: {
    changelanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changelanguage } = configSlice.actions;

export default configSlice.reducer;
