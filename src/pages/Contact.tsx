import Section from '../components/Section';
import { AlternateEmail, LinkedIn, Download } from '@mui/icons-material';
import { StyledUl, StyledLi } from '../shared/styled/GeneralComponents';
import { StyledContactLink } from '../shared/styled/ContactPageComponents';
import { resumeUrl } from '../constants/urls';

import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Contact = () => {
	return (
		<Section name={'Contact'} subtitle={"Let's keep in touch (っಠ‿ಠ)っ"} paddingBottom='300px'>
			<StyledDiv>
				<StyledUl>
					<StyledLi>
						<StyledContactLink href='mailto:mo.kairys@gmail.com'>
							<AlternateEmail />
							mo.kairys@gmail.com
						</StyledContactLink>
					</StyledLi>
					<StyledLi>
						<StyledContactLink href='https://www.linkedin.com/in/modestas-kairys-64965b134/'>
							<LinkedIn />
							linkedin.com/in/modestas-kairys-64965b134/
						</StyledContactLink>
					</StyledLi>
				</StyledUl>
				<StyledContactLink href={resumeUrl} download>
					<Download />
					Download my resume as PDF
				</StyledContactLink>
			</StyledDiv>
		</Section>
	);
};

export default Contact;
