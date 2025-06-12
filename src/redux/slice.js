import { createSlice } from '@reduxjs/toolkit';
import { getCarBrands, getCarById, getCars } from './operations';

const initialState = {
  cars: [],
  totalCars: null,
  page: null,
  totalPages: null,
  car: null,
  brands: [],
  filters: {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  isLoading: false,
  isError: null,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.page = 1;
      state.cars = [];
    },
    resetCars(state) {
      state.cars = [];
      state.page = 1;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.page === 1) {
          state.cars = payload.cars;
        } else {
          state.cars = [...state.cars, ...payload.cars];
        }
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

export const { setFilters, resetCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
