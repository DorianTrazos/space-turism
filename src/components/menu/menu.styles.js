import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHamburger = styled.img`
	position: absolute;
	top: 33px;
	right: 24px;
	z-index: 10;
`;

const StyledMenu = styled.ul`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 254px;
	height: 100vh;
	padding-top: 133px;
	padding-left: 32px;
	background-color: rgb(11, 13, 23, 0.15);
	backdrop-filter: blur(10px);
	transition: translate 0.3s;
	translate: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};
`;

const StyledLink = styled(NavLink)``;

export { StyledHamburger, StyledLink, StyledMenu };
