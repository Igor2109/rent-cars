import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  carBrand: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilterCarBrand(state, action) {
      state.carBrand = action.payload;
    },
  },
});

export const { setFilterCarBrand } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
