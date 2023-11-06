import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import AllOrders from './pages/AllOrders';
import Payment from './pages/Payment';

export default function AppRoutes(): JSX.Element {
	return (
		<Router>
			<ToastContainer />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cozinha" element={<Kitchen />} />
					<Route path="/retirada" element={<AllOrders />} />
					<Route path="/pagamento" element={<Payment />} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
}
