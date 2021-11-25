import styled from 'styled-components';
import * as spacing from './consts/Spacing';

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
	margin-bottom: ${spacing.SMALL};
	width: calc(${(props) => props.width} - 6px);
	text-align: ${(props) => props.textAlign};
	svg {
		font-size: 1rem;
	}
`;
