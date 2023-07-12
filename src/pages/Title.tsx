import { useContext } from 'react';
import { NavContext } from '../store/nav-context';
import {
	StyledTitlePage,
	StyledTitleContainer,
	StyledTitle,
	StyledSubtitle,
	StyledJumpToNavigationButton,
} from '../shared/styled/TitlePageComponents';
import StyledKeyboardArrowDown from '../shared/styled/KeyboardArrowDown';

const Title = () => {
	const navContext = useContext(NavContext);

	const handleJumpToNavigationClick = () => {
		navContext.sections[0].element.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<StyledTitlePage>
			<StyledTitleContainer>
				<StyledTitle>Modestas Kairys</StyledTitle>
				<StyledSubtitle>resume</StyledSubtitle>
			</StyledTitleContainer>
			<StyledJumpToNavigationButton type='button' onClick={handleJumpToNavigationClick}>
				<StyledKeyboardArrowDown />
			</StyledJumpToNavigationButton>
		</StyledTitlePage>
	);
};

export default Title;
