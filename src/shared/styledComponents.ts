import styled, { css } from 'styled-components';
import TitlePageImage from '../assets/TitlePageImage.jpg';

export const primaryColor = '#15262e';
export const secondaryColor = '#ba5446';
export const tertiaryColor = '#e5d6b9';

const deviceSize = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1440px',
	desktopL: '2560px',
};

export const device = {
	mobileS: `(min-width: ${deviceSize.mobileS})`,
	mobileM: `(min-width: ${deviceSize.mobileM})`,
	mobileL: `(min-width: ${deviceSize.mobileL})`,
	tablet: `(min-width: ${deviceSize.tablet})`,
	laptop: `(min-width: ${deviceSize.laptop})`,
	desktop: `(min-width: ${deviceSize.desktop})`,
	desktopL: `(min-width: ${deviceSize.desktopL})`,
};

export const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: no-repeat center right fixed url(${TitlePageImage});
	background-size: cover;
	text-align: center;
`;

export const StyledSubtitle = styled.h2<{ fontWeight?: string }>`
	color: ${secondaryColor};
	margin: 0 0 10px 0;
	font-weight: ${(props) => props.fontWeight};
`;

export const StyledSmallestSubtitle = styled.h4`
	color: ${secondaryColor};
	margin: 0px;
`;

export const StyledText = styled.div`
	margin: 0;
	color: ${tertiaryColor};
	font-weight: 500;
	text-align: left;
`;

export const StyledTitlePage = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledTitleContainer = styled.div`
	font-family: 'Exo 2';
	color: ${tertiaryColor};
	width: 100%;
	position: relative;
	top: 30%;
`;

export const StyledTitle = styled.h1`
	padding-bottom: 20px;
	margin-bottom: 0;
	font-size: 63px;
	border-bottom: 1px solid;
	border-bottom-color: rgba(0, 0, 0, 0.35);
	display: inline-block;
	text-align: center;
`;

export const StyledSubTitle = styled.p`
	margin-top: 10px;
	font-size: 28px;
`;

export const StyledJumpToNavigationButton = styled.a`
	position: absolute;
	bottom: 0;
	right: 5%;
	display: block;
	background: ${tertiaryColor};
	border: 2px solid ${tertiaryColor};
	width: 120px;
	height: 80px;

	&:hover {
		cursor: pointer;
	}
`;

export const StyledFlexContainer = styled.div<{ marginBottom?: boolean }>`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${(props) => (props.marginBottom ? '40px' : '0')};
	@media (max-width: ${deviceSize.laptop}) {
		flex-direction: column;
		text-align: center;
	}
`;

export const StyledColumn = styled.div<{ flexPercentage: string }>`
	flex: ${(props) => props.flexPercentage};
	margin: 10px 10px 20px 10px;
`;

export const StyledUl = styled.ul`
	padding: 0;
	margin: 0 10px;
`;

export const StyledLi = styled.li`
	list-style: none;
`;

export const StyledContactLink = styled.a`
	display: block;
	line-height: 32px;
	margin-bottom: 20px;
	font-size: 22px;
	color: gray;
	text-decoration: none;

	&:hover {
		opacity: 0.6;
	}

	svg {
		margin-right: 10px;
	}
`;

// Section components
export const StyledSectionContainer = styled.div`
	background-color: ${primaryColor};
`;

export const StyledSection = styled.div<{ paddingBottom?: string }>`
	margin: 0 auto 50px auto;
	position: relative;
	padding-bottom: ${(props) => props.paddingBottom};

	@media (max-width: ${deviceSize.tablet}) {
		max-width: 800px;
		position: inherit;
		padding: 50px 10px ${(props) => props.paddingBottom} 10px;
	}
	@media ${device.tablet} {
		max-width: 800px;
		padding: 50px 20% ${(props) => props.paddingBottom} 20%;
	}
	@media ${device.laptop} {
		max-width: 800px;
		padding: 50px 20% ${(props) => props.paddingBottom} 20%;
	}
	@media ${device.desktop} {
		max-width: 950px;
		padding: 50px 50px ${(props) => props.paddingBottom} 50px;
	}
	@media ${device.desktopL} {
		max-width: 1280px;
		padding: 50px 0 ${(props) => props.paddingBottom} 0;
	}
`;

export const StyledSectionTitle = styled.h1`
	color: ${secondaryColor};
`;

export const StyledSectionSubTitle = styled.h3`
	color: ${tertiaryColor};
	font-weight: 200;
	padding-bottom: 10px;
	border-bottom: 1px solid ${secondaryColor};
`;
//================================================

// Mobile navigation components
export const StyledMobileNavBar = styled.div<{ show: boolean }>`
	border: 2px solid ${tertiaryColor};
	transition: opacity 400ms ease-in;
	opacity: ${(props) => (props.show ? '1' : '0')};
	border-radius: 5px;
	overflow: hidden;
	z-index: 200;
	position: relative;
`;

export const StyledMobileMenuButton = styled.div<{ isClicked: boolean }>`
	background-color: ${tertiaryColor};
	width: 50px;
	height: 40px;
	border-radius: 5px;
	z-index: 200;
	position: relative;

	svg {
		transition: opacity 400ms ease-in;
		position: absolute;
		top: 0;
		left: 5px;
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
//================================================

// Backdrop.tsx component
export const StyledBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;
//================================================

// Star score component
export const StyledStarScore = styled.span`
	padding: 3px;
	transition: 0.9s;
	&:hover {
		background-color: gray;
		svg {
			margin-left: 3px;
		}
	}
`;

export const StyledStarScoreSpan = styled.span<{ width?: string; textAlign?: string; fontSize?: string }>`
	display: inline-block;
	margin-bottom: 10px;
	width: calc(${(props) => props.width} - 6px);
	text-align: ${(props) => props.textAlign};
	svg {
		font-size: 1rem;
	}
`;
//================================================
