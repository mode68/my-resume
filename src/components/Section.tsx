import { useRef, useEffect, useContext } from 'react';
import { StyledSection, StyledSectionTitle, StyledSectionSubTitle, StyledText } from '../shared/styledComponents';
import {NavContext} from '../store/nav-context';
import sectionObj from '../models/sectionObj';

const Section: React.FC<{name: string, subtitle?: string}> = ({ name, subtitle, children }) => {
    const navContext = useContext(NavContext);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            navContext.addSection(new sectionObj(name, sectionRef.current));
        }
    }, []);

    return <StyledSection ref={sectionRef}>
        <StyledSectionTitle>{name}</StyledSectionTitle>
        <StyledSectionSubTitle>{subtitle}</ StyledSectionSubTitle>
        <StyledText>{children}</StyledText>
    </StyledSection>
}

export default Section;