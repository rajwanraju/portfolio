import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import appSlice, { type AppType } from './slices/appSlice';

export interface RootState {
  app: AppType;
}

const rootReducer = combineReducers({
  app: appSlice,
});

const persistConfig = {
  key: 'root',
  storage: createWebStorage('local'),
  whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const resetStore = async (): Promise<void> => {
  await createWebStorage('local').removeItem('persist:root');

  const persistor = persistStore(store);
  persistor.purge().catch((error) => {
    console.error('Error purging persistor:', error);
  });

  store.dispatch({ type: 'RESET_STORE' });
};

export const persistor = persistStore(store);
