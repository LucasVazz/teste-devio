import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';
import { ButtonProps } from '../../@types';

export const SDivModal = styled(Modal)`
	padding: 4rem 15rem !important;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #9f9f9f;
	opacity: 0.975;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	overflow-y: scroll;

	@media (max-width: 768px) {
		padding: 2rem !important;
	}

	@media (max-width: 425px) {
		* {
			font-size: 0.9rem;
		}
	}
`;

export const SSubcontainer = styled.div`
	background-color: #fff;
	border-radius: 0.5rem;
	padding: 2rem 3rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

	img {
		width: 15%;
	}

	div {
		opacity: 1 !important;

		&.modal-mobile__item {
			display: flex;
			gap: 0;
			justify-content: space-between;
			align-items: center;

			& > div {
				display: flex;
				flex-direction: column;
			}
		}

		&.button-container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			margin-top: 1rem;
		}
	}

	@media (max-width: 768px) {
		padding: 2rem;
		margin-top: 3rem;

		div {
			&.modal-mobile {
				display: flex;
				flex-direction: column;

				div {
					&.modal-mobile__item {
						& > div {
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
		}
	}
`;

export const SButton = styled(Button)<ButtonProps>`
	background-color: ${props => props.color};
	color: ${props => (props.color === '#125c13' ? '#fff' : '#125c13')};
	border: ${props => (props.color === '#fff' ? '1px solid #125c13' : 'none')};
	padding: 1rem 3rem;
	border-radius: 1rem;
	width: 40%;
	opacity: 0.8;
	font-size: 0.875rem;
	font-weight: 700;
	transition: all 0.3s ease-in-out;

	&:hover {
		opacity: 1;
		transform: scale(1.05);
		cursor: pointer;
	}

	@media (max-width: 768px) {
		width: 50%;
		margin: 0 auto;
	}

	@media (max-width: 425px) {
		padding: ${props =>
			props.color === '#fff' ? '0.5rem 1.5rem' : '0.5rem 2.5rem'};
	}
`;

export const STotalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid #9f9f9f;
	border-radius: 0.25rem;
	padding: 0.75rem 2rem;
	margin: 1rem 0;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	em {
		margin: 0.25rem 0;
	}

	span {
		margin: 0.5rem 0;
	}
`;
