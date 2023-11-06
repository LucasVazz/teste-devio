import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

interface LinkProps {
	active?: string;
}

export const SContainer = styled(Container)`
	background: #125c13;
	padding: 0.5rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	color: #fff;

	img,
	nav {
		margin: 0;
	}
	&:hover {
		cursor: pointer;
			}

	@media (max-width: 768px) {
		padding: 1rem;
		flex-direction: column;

		nav {
			margin-top: 0.5rem;
		}
	}
`;

export const SLogo = styled.img`
	width: 10%;

	@media (max-width: 768px) {
		width: 25%;
	}

	@media (max-width: 425px) {
		width: 50%;
	}
`;

export const SLink = styled(Link)<LinkProps>`
	color: #fff;
	margin-right: 1rem;
	background-color: ${props =>
		props.active === 'true' ? '#0C400D' : 'transparent'};
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 0.875rem;
`;
