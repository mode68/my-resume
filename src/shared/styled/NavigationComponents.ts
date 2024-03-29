import styled, { css } from 'styled-components';
import * as colors from './consts/Colors';
import * as spacing from './consts/Spacing';

export const StyledNavBarContainer = styled.div<{ detached: boolean; isMobile: boolean }>`
	${(props) =>
		props.isMobile &&
		css`
			padding: ${spacing.SMALL};
			width: auto;
		`}
	${(props) =>
		!props.isMobile &&
		css`
			right: 50px;
			z-index: 100;
		`}
	${(props) =>
		props.detached &&
		css`
			position: fixed;
			top: ${props.isMobile ? '0' : '10%'};
		`}
    ${(props) =>
		!props.detached &&
		css`
			position: absolute;
		`}
`;

export const StyledNavBar = styled.div`
	float: right;
	border: 2px solid ${colors.TERTIARY};
`;

export const StyledNavButton = styled.button`
	color: ${colors.PRIMARY};
	background: ${colors.SECONDARY};
	border: none;
	width: 120px;
	height: 80px;
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	outline: 0;
	font-size: 1rem;
	padding: ${spacing.SMALL} ${spacing.X_SMALL};
	display: block;

	&.active {
		background-color: ${colors.PRIMARY};
		color: white;
	}

	&:hover {
		cursor: pointer;
		color: ${colors.TERTIARY};
	}
`;
