import styled from 'styled-components';
import * as colors from './consts/Colors';
import * as spacing from './consts/Spacing';

export const StyledTitlePage = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledTitleContainer = styled.div`
	font-family: 'Exo 2';
	color: ${colors.TERTIARY};
	width: 100%;
	position: relative;
	top: 30%;
`;

export const StyledTitle = styled.h1`
	padding-bottom: ${spacing.MEDIUM};
	margin-bottom: 0;
	font-size: 63px;
	border-bottom: 1px solid;
	border-bottom-color: rgba(0, 0, 0, 0.35);
	display: inline-block;
	text-align: center;
`;

export const StyledSubtitle = styled.p`
	margin-top: ${spacing.SMALL};
	font-size: 28px;
`;

export const StyledJumpToNavigationButton = styled.button`
	position: absolute;
	bottom: 0;
	right: 50px;
	display: block;
	background: ${colors.TERTIARY};
	border: 2px solid ${colors.TERTIARY};
	width: 124px;
	height: 80px;

	&:hover {
		cursor: pointer;
	}
`;
