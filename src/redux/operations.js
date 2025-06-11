import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from './api';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async ({ params }, thunkAPI) => {
    try {
      const { data } = await instance.get('/cars', { params });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  'cars/getCarById',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/cars/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getCarBrands = createAsyncThunk(
  'brands/getCarBrands',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/brands');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
