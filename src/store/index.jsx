import { configureStore } from "@reduxjs/toolkit";
import donasiReducer from "./slices/donasi";
import articleReducer from "./slices/article";

export default configureStore({
  reducer: {
    donasi: donasiReducer,
    article: articleReducer,
  },
});
