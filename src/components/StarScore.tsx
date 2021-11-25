import StarIcon from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import { StyledStarScore, StyledStarScoreSpan } from '../shared/styled/StarScoreComponents';

const StarScore: React.FC<{ name: string; score: number }> = ({ name, score }) => {
	let rating = [];
	for (let i = 0; i < 5; i++) {
		rating.push(i < score ? <StarIcon key={'star' + i} /> : <StarOutline key={'starOutline' + i} />);
	}
	return (
		<StyledStarScore>
			<StyledStarScoreSpan width='60%' textAlign='left'>
				{name}
			</StyledStarScoreSpan>
			<StyledStarScoreSpan width='40%' textAlign='right'>
				{rating}
			</StyledStarScoreSpan>
		</StyledStarScore>
	);
};

export default StarScore;
