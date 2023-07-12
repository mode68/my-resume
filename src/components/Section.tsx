import { useRef, useEffect, useContext } from 'react';
import { StyledText } from '../shared/styled/GeneralComponents';
import { StyledSection, StyledSectionTitle, StyledSectionSubTitle } from '../shared/styled/SectionComponents';
import { NavContext } from '../store/nav-context';
import { SectionObj } from '../models/sectionObj';

const Section: React.FC<{ name: string; subtitle?: string; paddingBottom?: string }> = ({
	name,
	subtitle,
	paddingBottom,
	children,
}) => {
	const navContext = useContext(NavContext);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!sectionRef.current) {
			return;
		}

		navContext.addSection(new SectionObj(name, sectionRef.current, false));
	}, []);

	return (
		<StyledSection ref={sectionRef} paddingBottom={paddingBottom}>
			<StyledSectionTitle>{name}</StyledSectionTitle>
			<StyledSectionSubTitle>{subtitle}</StyledSectionSubTitle>
			<StyledText>{children}</StyledText>
		</StyledSection>
	);
};

export default Section;
