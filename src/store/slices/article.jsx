import { createSlice } from "@reduxjs/toolkit";

export const articleSlices = createSlice({
  name: "article",
  initialState: {
    selectedArticle: null,
  },
  reducers: {
    setArticle(state, { payload }) {
      state.selectedArticle = payload;
    },
  },
});

export const { setArticle } = articleSlices.actions;
export default articleSlices.reducer;
