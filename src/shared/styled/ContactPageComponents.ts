import styled from 'styled-components';
import * as spacing from './consts/Spacing';

export const StyledContactLink = styled.a`
	display: block;
	line-height: 32px;
	margin-bottom: ${spacing.MEDIUM};
	font-size: 22px;
	color: gray;
	text-decoration: none;

	&:hover {
		opacity: 0.6;
	}

	svg {
		margin-right: ${spacing.SMALL};
	}
`;
