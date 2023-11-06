import React from 'react';
import { OrderProps, ProductProps } from '../../@types';
import * as S from './styled';

export default function OrderList() {
	const allOrders: (ProductProps | OrderProps)[][] = JSON.parse(
		localStorage.getItem('allOrders') || '[]',
	);

	return (
		<S.SContainer>
			<S.SDiv border="3px solid #000">
				<h2>Preparando:</h2>
				{allOrders.map(orderArray => {
					const order = orderArray[orderArray.length - 1];

					if (order.status === 'pending') {
						return <h1 key={order.id}>{order.client}</h1>;
					}

					return null;
				})}
			</S.SDiv>
			<div className="order-ready">
				<h2>Pronto:</h2>
				{allOrders.map(orderArray => {
					const order = orderArray[orderArray.length - 1];

					if (order.status === 'ready') {
						return (
							// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
							<h1 key={order.id}>{order.client}</h1>
						);
					}

					return null;
				})}
			</div>
		</S.SContainer>
	);
}
