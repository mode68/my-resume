import { useContext } from 'react';
import { NavContext } from '../store/nav-context';
import { StyledTitlePage, StyledTitleContainer, StyledTitle, StyledSubTitle, StyledJumpToNavigationButton } from '../shared/styledComponents';
import StyledKeyboardArrowDown from '../shared/styledKeyboardArrowDown';

const Title = () => {
    const navContext = useContext(NavContext);

    const handleJumpToNavigationClick = () => {
        navContext.sections[0].element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <StyledTitlePage>
          <StyledTitleContainer>
            <StyledTitle>Modestas Kairys</StyledTitle>
            <StyledSubTitle>resume</StyledSubTitle>
          </StyledTitleContainer>
          <StyledJumpToNavigationButton onClick={handleJumpToNavigationClick}><StyledKeyboardArrowDown /></StyledJumpToNavigationButton>
        </ StyledTitlePage>
    );
}

export default Title;