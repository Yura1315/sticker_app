import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import themeReducer from './reducers/ThemeSlice';

const rootReducer = combineReducers({
  theme: themeReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
export const persistor = persistStore(setupStore);
