import styled from 'styled-components';
import { Container } from 'react-bootstrap';

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

		h1 {
			margin: 2rem 0;
			font-size: 4rem;
		}

		&.order-ready {
			margin-left: 4rem;

			h1 {
				color: #125c13;
				animation: blinker 2s linear infinite;
			}

			@keyframes blinker {
				50% {
					opacity: 0;
				}
			}
		}

		h2 {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		padding: 3rem;

		h1 {
			font-size: 3rem !important;
			display: flex;
			flex-wrap: wrap;
		}

		div {
			&.order-ready {
				margin-left: 0;
			}
		}
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
		padding-bottom: 2rem;
	}
`;
