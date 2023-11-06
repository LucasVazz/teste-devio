import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoutes from './routes';
import { persistor, store } from './store';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<AppRoutes />
			</PersistGate>
		</Provider>
	);
}
