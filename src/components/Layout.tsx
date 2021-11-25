import { StyledLayoutContainer } from '../shared/styled/LayoutComponents';

const Layout: React.FC = ({ children }) => {
	return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

export default Layout;
