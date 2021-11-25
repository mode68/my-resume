import { StyledMobileMenuButton } from '../shared/styled/MobileNavigationComponents';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenuButton: React.FC<{ isClicked: boolean; onClick: () => void }> = ({ isClicked, onClick }) => {
	return (
		<StyledMobileMenuButton onClick={onClick} isClicked={isClicked}>
			<>
				<MenuIcon id='menu' />
				<CloseIcon id='close' />
			</>
		</StyledMobileMenuButton>
	);
};

export default MobileMenuButton;
