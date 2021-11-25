import { useContext, useMemo, useState, useEffect, useRef, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { StyledNavBarContainer, StyledNavBar, StyledNavButton } from '../shared/styled/NavigationComponents';
import MobileNavigation from './MobileNavigation';
import { isInViewport } from '../shared/utils';
import { NavContext } from '../store/nav-context';
import useIsMobile from '../hooks/useIsMobile';

const Navigation: React.FC = () => {
	const navContext = useContext(NavContext);
	const navButtonsParent = useRef<HTMLDivElement>(null);
	const [navigationDetached, setNavigationDetached] = useState(false);
	const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
	const isMobile = useIsMobile();

	const handleNavigationClick = (element: HTMLDivElement) => {
		element.scrollIntoView({ behavior: 'smooth' });
	};

	const navigationDetacher = useCallback(() => {
		setNavigationDetached(navContext.sections[0] && window.scrollY >= navContext.sections[0].element.offsetTop);
	}, [navContext.sections]);

	const navigationActiveClassApplier = useCallback(() => {
		if (navContext.sections && !isMobile) {
			navContext.sections.forEach((section, index) => {
				if (activeButtonIndex !== index && isInViewport(section.element)) {
					if (activeButtonIndex >= 0) {
						navButtonsParent.current!.children[activeButtonIndex].classList.remove('active');
					}
					setActiveButtonIndex(index);
					navButtonsParent.current!.children[index].classList.add('active');
				}
			});
		}
	}, [navContext.sections, activeButtonIndex, isMobile]);

	const debouncedNavigationDetacher = useMemo(() => debounce(navigationDetacher, 10), [navigationDetacher]);
	const debouncedNavigationActiveClassApplier = useMemo(
		() => debounce(navigationActiveClassApplier, 10),
		[navigationActiveClassApplier]
	);

	useEffect(() => {
		document.addEventListener('scroll', debouncedNavigationDetacher);
		document.addEventListener('scroll', debouncedNavigationActiveClassApplier);

		return () => {
			document.removeEventListener('scroll', debouncedNavigationDetacher);
			document.removeEventListener('scroll', debouncedNavigationActiveClassApplier);
		};
	}, [debouncedNavigationDetacher, debouncedNavigationActiveClassApplier]);

	const navigationButtons = navContext.sections.map((section) => (
		<StyledNavButton
			key={section.id}
			onClick={() => {
				handleNavigationClick(section.element);
			}}
		>
			{section.name}
		</StyledNavButton>
	));

	return (
		<StyledNavBarContainer detached={navigationDetached} isMobile={isMobile}>
			{isMobile ? (
				<MobileNavigation>{navigationButtons}</MobileNavigation>
			) : (
				<StyledNavBar ref={navButtonsParent}>{navigationButtons}</StyledNavBar>
			)}
		</StyledNavBarContainer>
	);
};

export default Navigation;
