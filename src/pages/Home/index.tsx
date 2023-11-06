import React, { useState } from 'react';
import Header from '../../components/Header';
import ModalProducts from '../../components/ModalProducts';
import Products from '../../components/Products';

export default function Home() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Header />
			<Products setShowModal={setShowModal} />
			<ModalProducts showModal={showModal} setShowModal={setShowModal} />
		</>
	);
}
