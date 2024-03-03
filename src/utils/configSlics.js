import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "configSlice",
  initialState: {
    language: "en",
  },
  reducers: {
    changelanguage: (state, action)=>{
        
    },
  },
});
