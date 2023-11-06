/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as S from './styled';
import { products } from '../../services/products';
import { ModalProps, PersistedReducerProps } from '../../@types';
import CardProduct from '../CardProduct';
import { deleteMyOrder } from '../../store/modules/products';
// eslint-disable-next-line import/order
import axios from 'axios';

const baseURL = 'http://localhost:3000/fastfood';

export default function Products({ setShowModal }: ModalProps) {
	const [searchValue, setSearchValue] = useState('');
	const [productsList, setProductsList] = useState(products);
	const dispatch = useDispatch();
	const [pedidos, setPedidos] = useState([]);
	const cancelOrder = () => {
		localStorage.removeItem('myOrder');
	};
	useEffect(() => {
		axios.get(`${baseURL}`).then(response => {
			setProductsList(response.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`${baseURL}/${searchValue}`).then(response => {
			setProductsList(response.data);
		});
	}, [searchValue]);

	return (
		<S.SContainer>
			<div>
				<h1>Seja bem-vindo(a)!</h1>
				<S.SInput
					type="text"
					name="busca"
					id="busca"
					placeholder="O que você procura?"
					value={searchValue}
					onChange={event => setSearchValue(event.target.value)}
				/>
			</div>
			<div>
				<h3>Produtos</h3>
				<p>Selecione um produto para adicionar ao seu pedido.</p>
				<S.SGridContainer>
					{productsList.map((product, index) => (
						<CardProduct
							onClick={() => {
								pedidos.push(product);
							}}
							id={product.id}
							key={`${product.id}-${index}`}
							name={product.name}
							description={product.description}
							price={product.price}
							image={product.image}
						/>
					))}
				</S.SGridContainer>
			</div>
			<div className="button-container">
				<S.SButton color="#fff" type="button" onClick={cancelOrder}>
					Cancelar
				</S.SButton>
				<S.SButton
					color="#9F9F9F"
					type="button"
					onClick={() => setShowModal(true)}
				>
					Revisar pedido
				</S.SButton>
			</div>
		</S.SContainer>
	);
}
