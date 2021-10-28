import Section from '../components/Section';
import { AlternateEmail, LinkedIn, GitHub } from '@material-ui/icons';
import { StyledUl, StyledLi, StyledContactLink } from '../shared/styledComponents';

const Contact = () => {
    return (
        <Section name={'Contact'} subtitle={"Let's keep in touch (っಠ‿ಠ)っ"} paddingBottom='300px'>
            <StyledUl>
                <StyledLi><StyledContactLink href='https://www.google.com'><AlternateEmail />mo.kairys@gmail.com</ StyledContactLink></StyledLi>
                <StyledLi><StyledContactLink href='https://www.linkedin.com/in/modestas-kairys-64965b134/'><LinkedIn />linkedin.com/in/modestas-kairys-64965b134/</ StyledContactLink></StyledLi>
                <StyledLi><StyledContactLink href='https://github.com/mode68'><GitHub />github.com/mode68</ StyledContactLink></StyledLi>
            </StyledUl>
        </Section>
    );
}

export default Contact;