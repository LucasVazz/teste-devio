import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import { ButtonProps } from '../../@types';

interface DivProps {
	border?: string;
}

export const SContainer = styled(Container)`
	padding: 3rem 7.5rem;
	display: flex;
	justify-content: center;
	width: 100%;
	gap: 2rem;

	& > div {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 1rem 0;

		img {
			width: 25%;
		}

		h1 {
			margin: 2rem 0;
			font-size: 4rem;
		}

		div {
			&.order-container {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				width: 90%;
				gap: 1rem;

				hr {
					color: #eee;
					border: 1px solid #eee;
					margin-bottom: 1rem;
				}
			}
		}

		h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 768px) {
		padding: 3rem;
	}

	@media (max-width: 425px) {
		padding: 3rem 1rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 0 auto;
	}
`;

export const SDiv = styled.div<DivProps>`
	border-right: ${props => props.border};

	h1 {
		opacity: 0.8;
		color: #9f9f9f;
	}

	@media (max-width: 425px) {
		border-right: none;
		border-bottom: ${props => props.border};
		padding-bottom: 1rem;
	}
`;

export const SButton = styled(Button)<ButtonProps>`
	color: ${props => props.color};
	border: none;
	background-color: transparent;
	margin-right: 1rem;
	opacity: 0.7;
	transition: all 0.3s ease-in-out;

	&:hover {
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
		opacity: ${props => (props.disabled ? '0.7' : '1')};
		transform: ${props => (props.disabled ? 'none' : 'scale(1.1)')};
	}
`;
