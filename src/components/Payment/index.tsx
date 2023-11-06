import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GiWallet } from 'react-icons/gi';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as S from './styled';
import { deleteMyOrder, setAllOrders } from '../../store/modules/products';
import { ProductProps } from '../../@types';

export default function PaymentComponent() {
	// We can also use the lib "formik" as well.
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [client, setClient] = useState('');
	const [comment, setComment] = useState('');
	const [change, setChange] = useState(0);
	const [paidValue, setPaidValue] = useState(0);
	const [payment, setPayment] = useState('Dinheiro');

	const products: ProductProps[] | [] = JSON.parse(
		localStorage.getItem('myOrder') || `[]`,
	);

	const allOrders = JSON.parse(localStorage.getItem('allOrders') || `[]`);

	const confirmation = () => {
		// eslint-disable-next-line no-restricted-globals, no-alert
		return confirm('Tem certeza que deseja canelar o seu pedido?');
	};

	const cancelOrder = () => {
		if (!confirmation()) {
			return;
		}

		localStorage.setItem('myOrder', '[]');
		dispatch(deleteMyOrder());
		navigate('/');
		toast.error('Pedido cancelado com sucesso!');
	};

	const finishOrder = () => {
		// eslint-disable-next-line no-alert
		toast.success('Pedido cadastrado com sucesso!');

		localStorage.setItem('myOrder', '[]');
		window.print();
		navigate('/');
	};

	const getTotal = () => {
		const prices = products.map(product => product.price);
		const total = prices.reduce((acc: number, price: string) => {
			return acc + parseInt(price, 10);
		}, 0);

		return total;
	};

	const calculateChange = () => {
		const total = getTotal();
		const changeValue = paidValue - total;

		setChange(changeValue);
	};

	function generateId() {
		return (
			Math.random().toString(36).substring(2) +
			new Date().getTime().toString(36)
		);
	}

	const handleSubmit = () => {
		if (getTotal() === 0) {
			// eslint-disable-next-line no-alert
			toast.warn('Por favor, adicione algum produto ao pedido!');
			return;
		}

		if (
			client === '' ||
			(payment === 'Dinheiro' && paidValue === 0) ||
			(paidValue !== 0 && change < 0)
		) {
			// eslint-disable-next-line no-alert
			toast.warn('Por favor, preencha todos os campos corretamente!');
			return;
		}

		const newProducts = [
			...products,
			{
				id: generateId(),
				client,
				comment,
				payment,
				change: change <= 0 ? null : change,
				total: getTotal(),
				status: 'pending',
			},
		];

		dispatch(setAllOrders(newProducts));
		localStorage.setItem(
			'allOrders',
			JSON.stringify([...allOrders, newProducts]),
		);
		dispatch(deleteMyOrder());
		finishOrder();
	};

	useEffect(() => {
		calculateChange();
	}, [paidValue]);

	return (
		<S.SContainer>
			<div>
				<GiWallet size={30} style={{ color: '#125C13' }} />
				<h1>Pagamento</h1>
			</div>
			<S.SPaymentContainer>
				<div>
					<h4>Resumo da compra</h4>
					<S.STotalContainer>
						{products.length !== 0 &&
							products.map((product, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<div key={`${product.id}-${index}`}>
									<em>{product.name}</em>
									<em>R${product.price}</em>
								</div>
							))}
						<hr />
						<span>Total do pedido:</span>
						<h2>R${getTotal()},00</h2>
					</S.STotalContainer>
					<h4>Nome do cliente</h4>
					<S.SInput
						type="text"
						name="client"
						id="client"
						placeholder="Primeiro e último nome"
						value={client}
						onChange={event => setClient(event.target.value)}
					/>
					<h4>Observações</h4>
					<textarea
						name="comment"
						id="comment"
						rows={5}
						placeholder="Observações"
						value={comment}
						onChange={event => setComment(event.target.value)}
					/>
				</div>
				<form onSubmit={handleSubmit}>
					<h4>Selecione a forma de pagamento</h4>
					<S.SPaymentContainer className="mobile">
						<div>
							<AiFillCreditCard size={30} style={{ color: '#125C13' }} />
							<label htmlFor="debit">
								<strong>
									<em>Débito</em>
								</strong>
							</label>
						</div>
						<input
							type="radio"
							name="payment"
							id="debit"
							value="Debito"
							// onChange={event => setPayment(event.target.value)}
							onClick={() => setPayment('Debito')}
						/>
					</S.SPaymentContainer>
					<S.SPaymentContainer className="mobile">
						<div>
							<AiFillCreditCard size={30} style={{ color: '#125C13' }} />
							<label htmlFor="credit">
								<strong>
									<em>Crédito</em>
								</strong>
							</label>
						</div>
						<input
							type="radio"
							name="payment"
							id="credit"
							value="Credito"
							// onChange={event => setPayment(event.target.value)}
							onClick={() => setPayment('Credito')}
						/>
					</S.SPaymentContainer>
					<S.SPaymentContainer className="mobile">
						<div>
							<BsCashCoin size={30} style={{ color: '#125C13' }} />
							<label htmlFor="cash">
								<strong>
									<em>Dinheiro</em>
								</strong>
							</label>
						</div>
						<input
							type="radio"
							name="payment"
							id="cash"
							value="Dinheiro"
							onClick={() => setPayment('Dinheiro')}
							defaultChecked
						/>
					</S.SPaymentContainer>
					<S.SChangeContainer>
						<div>
							<h4>Valor entregue</h4>
							<S.SInput
								type="number"
								name="valor-entregue"
								id="valor-entregue"
								value={paidValue}
								onChange={event =>
									setPaidValue(parseInt(event.target.value, 10))
								}
							/>
						</div>
						<div>
							<h4>Troco</h4>
							<S.SInput
								type="text"
								name="troco"
								id="troco"
								value={`R$${
									change < 0 || Number.isNaN(change) ? 0 : change
								},00`}
								onChange={calculateChange}
							/>
						</div>
					</S.SChangeContainer>
				</form>
			</S.SPaymentContainer>
			<S.SButtonContainer>
				<S.SButton color="#fff" type="button" onClick={cancelOrder}>
					Cancelar pedido
				</S.SButton>
				<S.SButton color="#125c13" type="submit" onClick={handleSubmit}>
					Finalizar pedido
				</S.SButton>
			</S.SButtonContainer>
		</S.SContainer>
	);
}
