import styled from 'styled-components';

interface DivProps {
	isActive: string;
}

export const SCardProduct = styled.div<DivProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 250px;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	transition: all 0.3s;

	img {
		width: 50%;
	}

	span {
		border: none;
		border-radius: 5rem;
		background-color: #125c13;
		padding: 0.25rem 0.75rem;
		color: #fff;
		font-weight: 600;
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
	}

	&:hover {
		cursor: pointer;
		border: 2px solid #125c13;
	}

	@media (max-width: 768px) {
		filter: grayscale(0%);
	}

	@media (max-width: 425px) {
		width: 150px;
		height: 200px;

		span {
			font-size: 0.875rem;
			bottom: 0.25rem;
			right: 0.25rem;
		}

		img {
			width: 40%;
		}
	}
`;
