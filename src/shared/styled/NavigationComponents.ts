import styled, { css } from 'styled-components';
import * as colors from './consts/Colors';
import * as spacing from './consts/Spacing';

export const StyledNavBarContainer = styled.div<{ detached: boolean; isMobile: boolean }>`
	${(props) =>
		props.isMobile &&
		css`
			padding: ${spacing.SMALL};
		`}
	${(props) =>
		props.detached &&
		css`
			position: fixed;
			width: ${props.isMobile ? 'auto' : '100%'};
			top: ${props.isMobile ? '0' : '10%'};
		`}
    ${(props) =>
		!props.detached &&
		css`
			position: absolute;
			width: ${props.isMobile ? 'auto' : '100%'};
		`}
`;

export const StyledNavBar = styled.div`
	float: right;
	margin-right: 5%;
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
