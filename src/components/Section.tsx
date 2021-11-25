import { useRef, useEffect, useContext } from 'react';
import { StyledSection, StyledSectionTitle, StyledSectionSubTitle, StyledText } from '../shared/styledComponents';
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
		if (sectionRef.current) {
			navContext.addSection(new SectionObj(name, sectionRef.current, false));
		}
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
