import { configureStore } from "@reduxjs/toolkit";
import donasiReducer from "./slices/donasi";

export default configureStore({
  reducer: {
    donasi: donasiReducer,
  },
});
