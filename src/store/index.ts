import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsSlice from './modules/products';

const persistConfig = {
	key: '@persistProducts',
	storage,
};

const persistedReducer = persistReducer(persistConfig, productsSlice);

export const store = configureStore({
	reducer: {
		persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export type RootStore = ReturnType<typeof store.getState>;
