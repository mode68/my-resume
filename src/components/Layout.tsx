import { StyledContainer } from '../shared/styledComponents';

const Layout: React.FC = ({ children }) => {
    return <StyledContainer>
        {children}
    </StyledContainer>
}

export default Layout;