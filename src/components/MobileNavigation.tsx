import { useState } from 'react';
import { StyledMobileNavigationContainer, StyledMobileNavBar } from '../shared/styledComponents';
import useDelayUnmount from '../hooks/useDelayUnmount';
import MobileMenuButton from './MobileMenuButton';
import Backdrop from './Backdrop';

const MobileNavigation: React.FC = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const shouldRenderChild = useDelayUnmount(toggleMenu, 500);

    const handleMenuButtonClick = () => {
        setToggleMenu(toggleMenu => !toggleMenu);
    }

    return <StyledMobileNavigationContainer>
        <MobileMenuButton isClicked={toggleMenu} onClick={handleMenuButtonClick} />
        {shouldRenderChild && (<>
            <StyledMobileNavBar onClick={handleMenuButtonClick} show={toggleMenu}>{children}</StyledMobileNavBar>
            <Backdrop show={toggleMenu} onClick={handleMenuButtonClick} />
        </>)}
    </StyledMobileNavigationContainer>
}

export default MobileNavigation;