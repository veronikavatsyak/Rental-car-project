import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { carsReducer } from './slice';
import { favouritesReducer } from './favouritesSlice';

const favouritesPersistConfig = {
  key: 'favourites',
  storage,
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favourites: persistReducer(favouritesPersistConfig, favouritesReducer), // ✅ обгортаємо тільки favourites
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
