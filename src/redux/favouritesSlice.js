import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const carId = action.payload;
      if (state.items.includes(carId)) {
        state.items = state.items.filter(id => id !== carId);
      } else {
        state.items.push(carId);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
