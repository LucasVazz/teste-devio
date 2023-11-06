import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import { ProductProps } from '../../@types';
import { setMyOrder } from '../../store/modules/products';
import Modalmoda from '../Modalmoda';

export default function CardProduct({
	id,
	name,
	description,
	price,
	image,
}: ProductProps) {
	const dispatch = useDispatch();
	const [isSelected, setIsSelected] = useState(false);
	const [Modal, setModal] = useState(false);
	const [produto, setProduto] = useState({});
	const openModal = () => {
		setProduto({
			id: id,
			name: name,
			description: description,
			price: price,
			image: image,
		});
		setModal(true);
	};

	return (
		<div>
			<Modalmoda
				showModal={Modal}
				setShowModal={setModal}
				product={produto}
			></Modalmoda>
			<S.SCardProduct key={id} onClick={() => openModal()}>
				<img src={image} alt={name} />
				<h4>{name}</h4>
				<small>
					<em>{description}</em>
				</small>
				<strong>R${price}</strong>
			</S.SCardProduct>
		</div>
	);
}
