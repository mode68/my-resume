import styled from 'styled-components';
import * as colors from './consts/Colors';
import * as spacing from './consts/Spacing';
import { device, deviceSize } from './consts/DeviceSize';

export const StyledSectionContainer = styled.div`
	background-color: ${colors.PRIMARY};
`;

export const StyledSection = styled.div<{ paddingBottom?: string }>`
	margin: 0 auto ${spacing.X_X_LARGE} auto;
	position: relative;
	padding-bottom: ${(props) => props.paddingBottom};

	@media (max-width: ${deviceSize.tablet}) {
		max-width: 800px;
		position: inherit;
		padding: ${spacing.X_X_LARGE} 10px ${(props) => props.paddingBottom} ${spacing.SMALL};
	}
	@media ${device.tablet} {
		max-width: 800px;
		padding: ${spacing.X_X_LARGE} 20% ${(props) => props.paddingBottom} 20%;
	}
	@media ${device.laptop} {
		max-width: 800px;
		padding: ${spacing.X_X_LARGE} 20% ${(props) => props.paddingBottom} 20%;
	}
	@media ${device.desktop} {
		max-width: 950px;
		padding: ${spacing.X_X_LARGE} ${spacing.X_X_LARGE} ${(props) => props.paddingBottom} ${spacing.X_X_LARGE};
	}
	@media ${device.desktopL} {
		max-width: 1280px;
		padding: ${spacing.X_X_LARGE} 0 ${(props) => props.paddingBottom} 0;
	}
`;

export const StyledSectionTitle = styled.h1`
	color: ${colors.SECONDARY};
`;

export const StyledSectionSubTitle = styled.h2`
	color: ${colors.TERTIARY};
	font-weight: 200;
	padding-bottom: ${spacing.SMALL};
	border-bottom: 1px solid ${colors.SECONDARY};
`;
