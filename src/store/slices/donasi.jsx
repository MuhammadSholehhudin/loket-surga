import { createSlice } from "@reduxjs/toolkit";

export const donasiSlices = createSlice({
  name: "donasi",
  initialState: {
    selectedNominal: null,
    selectedMetode: null,
    selectedSedekahCategories: null,
  },
  reducers: {
    setNominal(state, { payload }) {
      state.selectedNominal = payload;
    },
    setMetodePembayaran(state, { payload }) {
      state.selectedMetode = payload;
    },
    setCategorySedekah(state, { payload }) {
      state.selectedSedekahCategories = payload;
    },
  },
});

export const { setNominal, setMetodePembayaran, setCategorySedekah } =
  donasiSlices.actions;
export default donasiSlices.reducer;
