import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";

const appsStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appsStore;
