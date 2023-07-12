import styled from 'styled-components';
import { deviceSize } from './consts/DeviceSize';
import * as colors from './consts/Colors';
import * as spacing from './consts/Spacing';

export const StyledSubtitle = styled.h2<{ fontWeight?: string }>`
	color: ${colors.SECONDARY};
	margin: 0 0 ${spacing.SMALL} 0;
	font-weight: ${(props) => props.fontWeight};
`;

export const StyledSmallestSubtitle = styled.h3`
	color: ${colors.SECONDARY};
	margin: 0px;
`;

export const StyledText = styled.div`
	margin: 0;
	color: ${colors.TERTIARY};
	font-weight: 500;
	text-align: left;
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
	margin: ${spacing.SMALL} ${spacing.SMALL} ${spacing.MEDIUM} ${spacing.SMALL};
`;

export const StyledUl = styled.ul`
	padding: 0;
	margin: 0 ${spacing.SMALL};
`;

export const StyledLi = styled.li`
	list-style: none;
`;
