import { createSlice } from '@reduxjs/toolkit';
import { getCarBrands, getCarById, getCars } from './operations';

const initialState = {
  cars: [],
  totalCars: null,
  page: 1,
  totalPages: null,
  car: null,
  brands: [],
  filters: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  isLoading: false,
  isError: null,
  wasFiltered: false,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.page = 1;
      state.cars = [];
      state.wasFiltered = true;
    },
    resetFilters(state) {
      state.filters = {
        brand: '',
        rentalPrice: '',
        minMileage: '',
        maxMileage: '',
      };
      state.wasFiltered = false;
    },
    resetCars(state) {
      state.cars = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        // console.log('✅ FULFILLED:', payload);
        state.isLoading = false;
        if (payload.page === 1) {
          state.cars = payload.cars;
        } else {
          state.cars = [...state.cars, ...payload.cars];
        }
        state.totalCars = payload.totalCars;
        state.page = Number(payload.page);
        state.totalPages = Number(payload.totalPages);
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

export const { setFilters, resetCars, resetFilters } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
