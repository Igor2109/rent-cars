import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { requestCars } from "../services/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (page, thunkAPI) => {
    try {
      const cars = await requestCars(page);
      return { page, cars };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
  favCarsIds: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    toggleFav: (state, action) => {
      if (state.favCarsIds.includes(action.payload)) {
        state.favCarsIds = state.favCarsIds.filter(
          (id) => id !== action.payload
        );
      } else {
        state.favCarsIds.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      // ========================== FETCH CARS =====================
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items =
          action.payload.page === 1
            ? action.payload.cars
            : [...state.items, ...action.payload.cars];
      })
      .addMatcher(isAnyOf(fetchCars.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchCars.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { toggleFav } = carSlice.actions;
export const carsReducer = carSlice.reducer;
