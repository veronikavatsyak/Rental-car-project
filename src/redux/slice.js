import { createSlice } from '@reduxjs/toolkit';
import { getCarBrands, getCarById, getCars } from './operations';

const initialState = {
  cars: [],
  totalCars: null,
  page: null,
  totalPages: null,
  car: null,
  brands: [],
  isLoading: false,
  isError: null,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = payload.cars;
        state.totalCars = payload.totalCars;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getCarById.pending, state => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.car = payload;
      })
      .addCase(getCarById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(getCarBrands.fulfilled, (state, { payload }) => {
        state.brands = payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
