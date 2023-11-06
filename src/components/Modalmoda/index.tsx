/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { ModalProps, ProductProps } from '../../@types';
import * as S from './styled';
import '../Modalmoda/botao.css';

export default function ModalProducts({
	showModal,
	setShowModal,
	product,
	setProduct,
}: ModalProps & ProductProps) {
	const navigate = useNavigate();
	const [selectedOption, setSelectedOption] = useState(false);
	const [contador, setContador] = useState(0);
	const handleOptionChange = event => {
		setSelectedOption(!selectedOption);
	};
	const products: ProductProps[] | [] = JSON.parse(
		localStorage.getItem('myOrder') || `[]`,
	);

	const getTotal = () => {
		const total = parseFloat(product.price) * contador;

		return total;
	};
	const [modal, setModal] = useState(false);
	useEffect(() => {
		setModal(showModal);
		console.log(modal);
	}, [showModal]);
	const finishOrder = () => {
		if (getTotal() === 0) {
			// eslint-disable-next-line no-alert
			toast.warn('Por favor, adicione algum produto ao pedido!');

			return;
		}
		let myOrder = JSON.parse(localStorage.getItem('myOrder')) || [];
		let novoObjeto = {
			id: product.id,
			name: product.name,
			description: product.description,
			price: getTotal(),
			image: product.image,
		};
		myOrder.push(novoObjeto);

		navigate('/pagamento');
	};
	const handleClose = () => {
		let myOrder = JSON.parse(localStorage.getItem('myOrder')) || [];
		let novoObjeto = {
			id: product.id,
			name: product.name,
			description: product.description,
			price: getTotal(),
			image: product.image,
		};

		myOrder.push(novoObjeto);
		localStorage.setItem('myOrder', JSON.stringify(myOrder));
		setShowModal(false);
	};
	return (
		<S.SDivModal show={showModal} onHide={handleClose} centered>
			<S.SSubcontainer>
				<Modal.Header closeButton>
					<h2>Revise seu pedido</h2>
				</Modal.Header>
				<Modal.Body className="modal-mobile">
					<div className="modal-mobile__item" key={`${product.id}`}>
						<img src={product.image} alt={product.name} />
						<div className="contador">
							{' '}
							<button
								className="botao-redondo"
								onClick={() => {
									setContador(contador + 1);
								}}
							>
								+
							</button>
							<a>{contador}</a>
							<button
								className="botao-redondo"
								onClick={() => {
									setContador(contador - 1);
								}}
							>
								-
							</button>
						</div>
						<div>
							<h4>{product.name}</h4>
							<small>
								<em>{product.description}</em>
							</small>
						</div>
						<strong>R${product.price}</strong>
					</div>

					<S.STotalContainer>
						{products.length !== 0 &&
							products.map((product, index) => (
								<div key={`${product.id}-${index}`}>
									<em>{product.name}</em>
									<em>R${product.price}</em>
								</div>
							))}
						<hr />
						<span>Total do pedido:</span>
						<h2>R${getTotal()},00</h2>
					</S.STotalContainer>
				</Modal.Body>
				<Modal.Footer className="button-container">
					<S.SButton color="#fff" type="button" onClick={handleClose}>
						Continuar adicionando
					</S.SButton>
					<S.SButton color="#125c13" type="button" onClick={finishOrder}>
						Adicionar pedido
					</S.SButton>
				</Modal.Footer>
			</S.SSubcontainer>
		</S.SDivModal>
	);
	// eslint-disable-next-line prettier/prettier
}
