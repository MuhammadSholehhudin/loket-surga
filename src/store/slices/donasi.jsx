import { createSlice } from "@reduxjs/toolkit";

export const donasiSlices = createSlice({
  name: "donasi",
  initialState: {
    selectedNominal: null,
    selectedMetode: null,
  },
  reducers: {
    setNominal(state, { payload }) {
      state.selectedNominal = payload;
    },
    setMetodePembayaran(state, { payload }) {
      state.selectedMetode = payload;
    },
  },
});

export const { setNominal, setMetodePembayaran } = donasiSlices.actions;
export default donasiSlices.reducer;
