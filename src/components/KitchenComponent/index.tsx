import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillCheckCircle } from 'react-icons/ai';
import { OrderProps, ProductProps } from '../../@types';
import * as S from './styled';
import {
	changeOrderStatusRedux,
	deleteOrderFromAll,
} from '../../store/modules/products';

export default function KitchenComponent() {
	const allOrdersList: (ProductProps | OrderProps)[][] = JSON.parse(
		localStorage.getItem('allOrders') || '[]',
	);

	const [orderList, setOrderList] = useState(allOrdersList);

	const pendingOrders = orderList.filter(orderArray =>
		orderArray.find(order => order.status === 'pending'),
	);

	const finishedOrders = orderList.filter(orderArray =>
		orderArray.find(order => order.status === 'ready'),
	);

	const deleteOrder = (id: string) => {
		const newOrderList = orderList.filter(orderArray => {
			const order = orderArray[orderArray.length - 1];

			return order.id !== id;
		});

		setOrderList(newOrderList);
		localStorage.setItem('allOrders', JSON.stringify(newOrderList));
	};

	const changeOrderStatus = (id: string) => {
		const newOrders = orderList.map(orderArray => {
			const order = orderArray[orderArray.length - 1];

			if (order.id === id) {
				if (order.status === 'pending') {
					order.status = 'ready';
					return orderArray;
				}

				if (order.status === 'ready') {
					order.status = 'pending';
					return orderArray;
				}
			}

			return orderArray;
		});

		setOrderList(newOrders);
		localStorage.setItem('allOrders', JSON.stringify(newOrders));
	};

	return (
		<S.SContainer>
			<S.SDiv border="3px solid #000">
				<h2>Preparando:</h2>
				{pendingOrders.map(orderArray =>
					orderArray.map((order, index) => (
						<div key={order.id}>
							<div className="order-container">
								<div>
									<h4>{order.name}</h4>
									<small>
										<em>{order.description}</em>
										{order.comment && <em>*{order.comment}</em>}
									</small>
								</div>
								{order.client && <h4>{order.client}</h4>}
								<div>
									{index === orderArray.length - 1 && (
										<S.SButton
											color="#f00"
											type="button"
											onClick={() => {
												deleteOrder(order.id);
												deleteOrderFromAll(order.id);
												toast.error('O pedido foi deletado!');
											}}
										>
											<TiDeleteOutline size={35} />
										</S.SButton>
									)}
									{index === orderArray.length - 1 && (
										<S.SButton
											color="#0f0"
											type="button"
											onClick={() => {
												changeOrderStatus(order.id);
												changeOrderStatusRedux(order.id);
												toast.success('O pedido está pronto!');
											}}
										>
											<AiFillCheckCircle size={30} />
										</S.SButton>
									)}
								</div>
							</div>
							{index === orderArray.length - 1 && <hr />}
						</div>
					)),
				)}
			</S.SDiv>
			<div className="order-ready">
				<h2>Pronto:</h2>
				{finishedOrders.map(orderArray =>
					orderArray.map((order, index) => (
						<div key={order.id}>
							<div className="order-container">
								<div>
									<h4>{order.name}</h4>
									<small>
										<em>{order.description}</em>
										{order.change && (
											<>
												<strong>Troco: </strong>
												<em>R${order.change},00</em>
											</>
										)}
									</small>
								</div>
								{order.client && <h4>{order.client}</h4>}
								<div>
									{index === orderArray.length - 1 && (
										<S.SButton
											color="#f00"
											type="button"
											onClick={() => {
												changeOrderStatus(order.id);
												changeOrderStatusRedux(order.id);
												toast.warn('O status do pedido foi alterado!');
											}}
										>
											<TiDeleteOutline size={35} />
										</S.SButton>
									)}
									{index === orderArray.length - 1 && (
										<S.SButton
											color="#0f0"
											type="button"
											onClick={() => {
												deleteOrder(order.id);
												deleteOrderFromAll(order.id);
												toast.success('O pedido foi retirado!');
											}}
										>
											<AiFillCheckCircle size={30} />
										</S.SButton>
									)}
								</div>
							</div>
							{index === orderArray.length - 1 && <hr />}
						</div>
					)),
				)}
			</div>
		</S.SContainer>
	);
}
