import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import { ButtonProps } from '../../@types';

export const SContainer = styled(Container)`
	padding: 3rem 7.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	div {
		&.button-container {
			display: flex;
			justify-content: flex-end;
		}

		h3 {
			margin-bottom: 0.5rem;
		}
	}

	@media (max-width: 768px) {
		padding: 1rem;

		div {
			&.button-container {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1rem;
			}
		}
	}
`;

export const SGridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-gap: 3rem;
	width: 100%;
	margin: 2rem auto 4rem auto;

	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 425px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}
`;

export const SInput = styled.input`
	border-radius: 0.25rem;
	border: none;
	padding: 0.75rem 2rem;
	background-color: #f4f4f4;
	margin: 1rem auto 3rem auto;
	font-size: 1rem;
`;

export const SButton = styled(Button)<ButtonProps>`
	background-color: ${props => props.color};
	color: ${props => (props.color === '#9F9F9F' ? '#fff' : '#9F9F9F')};
	border: ${props => (props.color === '#fff' ? '1px solid #9F9F9F' : 'none')};
	padding: 1rem 3rem;
	border-radius: 1rem;
	width: 25%;
	margin-right: 2rem;
	opacity: 0.8;
	font-size: 1rem;
	font-weight: 700;
	transition: all 0.3s ease-in-out;

	&:hover {
		opacity: 1;
		transform: scale(1.05);
		cursor: pointer;
		border: ${props => (props.color === '#fff' ? '1px solid #f00' : 'none')};
		color: ${props => (props.color === '#fff' ? '#f00' : '#fff')};
		background-color: ${props => (props.color === '#fff' ? '#fff' : '#125c13')};
	}

	@media (max-width: 768px) {
		width: 50%;
		margin: 0 auto;
	}

	@media (max-width: 425px) {
		width: 80%;
		margin: 0 auto;
	}
`;
