import { useContext, useMemo, useState, useEffect, useRef, useCallback} from 'react';
import debounce from 'lodash/debounce';
import { StyledNavBarContainer, StyledNavBar, StyledNavButton } from '../shared/styledComponents';
import { isInViewport } from '../shared/utils';
import { NavContext } from '../store/nav-context';

const Navigation: React.FC = () => {
    const navContext = useContext(NavContext);
    const navButtonsParent = useRef<HTMLDivElement>(null);
    const [navigationDetached, setNavigationDetached] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

    const handleNavigationClick = (element: HTMLDivElement) => {
        element.scrollIntoView({ behavior: 'smooth' });
    }

    const navigationDetacher = useCallback(() => {
        setNavigationDetached(navContext.sections[0] && window.scrollY >= navContext.sections[0].element.offsetTop);
    }, [navContext.sections]);

    const navigationActiveClassApplier = useCallback(() => {
        if (navContext.sections) {
            navContext.sections.forEach((section, index) => { 
                if (activeButtonIndex !== index && isInViewport(section.element)) {
                    if (activeButtonIndex >= 0) {
                        navButtonsParent.current!.children[activeButtonIndex].classList.remove('active');
                    }
                    setActiveButtonIndex(index);
                    navButtonsParent.current!.children[index].classList.add('active');
                }
            })
        }
    }, [navContext.sections, activeButtonIndex]);

    const debouncedNavigationDetacher = useMemo(() => debounce(navigationDetacher, 20), [navigationDetacher]);
    const debouncedNavigationActiveClassApplier = useMemo(() => debounce(navigationActiveClassApplier, 50), [navigationActiveClassApplier]);
    
    useEffect(() => {
        document.addEventListener('scroll', debouncedNavigationDetacher);
        document.addEventListener('scroll', debouncedNavigationActiveClassApplier);

        return () => {
            document.removeEventListener('scroll', debouncedNavigationDetacher);
            document.removeEventListener('scroll', debouncedNavigationActiveClassApplier);
        }
    }, [debouncedNavigationDetacher, debouncedNavigationActiveClassApplier]);

    return <StyledNavBarContainer detached={navigationDetached}>
        <StyledNavBar ref={navButtonsParent}>
            {navContext.sections.map((section => <StyledNavButton key={section.id} onClick={() => {handleNavigationClick(section.element)}}>{section.name}</StyledNavButton>))}
        </StyledNavBar>
    </StyledNavBarContainer>
}

export default Navigation;