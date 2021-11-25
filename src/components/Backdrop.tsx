import { StyledBackdrop } from '../shared/styled/BackdropComponents';

const Backdrop: React.FC<{ show: boolean; onClick: () => void }> = ({ show, onClick }) => {
	return show ? <StyledBackdrop onClick={onClick}></StyledBackdrop> : null;
};

export default Backdrop;
