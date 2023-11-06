import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';
import { ButtonProps } from '../../@types';

export const SContainer = styled(Container)`
	padding: 3rem 7.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	h1 {
		margin-left: 1rem;
	}

	& > div {
		display: flex;
	}

	@media (max-width: 768px) {
		padding: 3rem 2rem;
	}
`;

export const SChangeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 1024px) {
		gap: 0;
	}

	@media (max-width: 425px) {
		flex-direction: column;
	}
`;

export const SButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 2rem;
	margin-top: 3rem;

	@media (max-width: 768px) {
		justify-content: center;
		align-items: center;
	}
`;

export const SButton = styled(Button)<ButtonProps>`
	background-color: ${props => props.color};
	color: ${props => (props.color === '#125c13' ? '#fff' : '#125c13')};
	border: ${props => (props.color === '#fff' ? '1px solid #125c13' : 'none')};
	padding: 1rem 3rem;
	border-radius: 1rem;
	width: 25%;
	opacity: 0.8;
	font-size: 0.875rem;
	font-weight: 700;
	transition: all 0.3s ease-in-out;

	&:hover {
		opacity: 1;
		transform: scale(1.05);
		cursor: pointer;
		color: ${props => (props.color === '#125c13' ? '#fff' : '#f00')};
		border: ${props => (props.color === '#fff' ? '1px solid #f00' : 'none')};
	}

	@media (max-width: 768px) {
		padding: 1rem 2rem;
		width: 75%;
		margin: 0 auto;
	}

	@media (max-width: 425px) {
		padding: 0.5rem 2rem;
	}
`;

export const STotalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid #9f9f9f;
	border-radius: 0.25rem;
	padding: 0.75rem 2rem;
	margin-bottom: 1rem;

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

export const SPaymentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem 0;
	width: 100%;

	& > div {
		width: 45%;

		label {
			margin-left: 1rem;
		}
	}

	textarea {
		border-radius: 0.25rem;
		border: none;
		padding: 0.75rem 2rem;
		background-color: #f4f4f4;
		margin: 0.5rem auto;
		font-size: 0.875rem;
		width: 100%;
	}

	@media (max-width: 1024px) {
		gap: 0;

		& > div {
			margin-right: 2rem;
		}

		form {
			width: 50%;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;

		&.mobile {
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			gap: 0;

			div {
				width: 30%;
			}
		}

		div {
			width: 100%;
			gap: 1rem;
		}
	}

	@media (max-width: 425px) {
		&.mobile {
			div {
				width: 40%;
			}
		}
	}
`;

export const SInput = styled.input`
	border-radius: 0.25rem;
	border: none;
	padding: 0.75rem 2rem;
	background-color: #f4f4f4;
	font-size: 0.875rem;
	margin: 0.5rem auto;
`;
