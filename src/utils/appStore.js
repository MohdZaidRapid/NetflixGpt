import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appsStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: configReducer,
  },
});

export default appsStore;
