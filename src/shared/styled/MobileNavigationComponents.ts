import styled from 'styled-components';
import * as colors from './consts/Colors';
import * as spacing from './consts/Spacing';

export const StyledMobileNavBar = styled.div<{ show: boolean }>`
	border: 2px solid ${colors.TERTIARY};
	transition: opacity 400ms ease-in;
	opacity: ${(props) => (props.show ? '1' : '0')};
	border-radius: ${spacing.X_SMALL};
	overflow: hidden;
	z-index: 200;
	position: relative;
`;

export const StyledMobileMenuButton = styled.div<{ isClicked: boolean }>`
	background-color: ${colors.TERTIARY};
	width: ${spacing.X_X_LARGE};
	height: 40px;
	border-radius: ${spacing.X_SMALL};
	z-index: 200;
	position: relative;

	svg {
		transition: opacity 400ms ease-in;
		position: absolute;
		top: 0;
		left: ${spacing.X_SMALL};
		font-size: 2.5em;
	}

	svg#menu {
		opacity: ${(props) => (props.isClicked ? `0` : `1`)};
	}
	svg#close {
		opacity: ${(props) => (props.isClicked ? `1` : `0`)};
	}
`;

export const StyledMobileNavigationContainer = styled.div`
	display: inline-block;
	z-index: 200;
	width: auto;
`;
