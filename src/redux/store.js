import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/MainReducer";



const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
