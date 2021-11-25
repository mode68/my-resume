import Section from '../components/Section';
import { StyledSubtitle, StyledColumn, StyledFlexContainer } from '../shared/styledComponents';

const Education = () => {
	return (
		<Section name={'Education'} subtitle={'An investment in yourself will never lead to regret'}>
			<StyledFlexContainer marginBottom>
				<StyledColumn flexPercentage='35%'>
					<StyledSubtitle fontWeight='500'>Vilniaus Uzupio Gimnazija</StyledSubtitle>2008 - 2012
				</StyledColumn>
				<StyledColumn flexPercentage='65%'>
					10th grade was probably my first introduction to programming. Our highschool had mandaroty
					curriculum where we were taught some basic programming concepts (like for/while loops) in Pascal
					language. It soon became one of my favorite classes (together with PE of course), I continued taking
					it in later grades when it became an optional class.
				</StyledColumn>
			</StyledFlexContainer>
			<StyledFlexContainer>
				<StyledColumn flexPercentage='35%'>
					<StyledSubtitle fontWeight='500'>Vilniaus Universitetas</StyledSubtitle>2012 - 2016
				</StyledColumn>
				<StyledColumn flexPercentage='65%'>
					I entered Software Engineering course where we learned advanced programming basics using Java.
					Obviously working as a programmer is not just about writing code, you need to understand business
					logic, learn how to visualize it and know how to work in a team. I feel all of these things were
					well covered by our University program. There were some questionable courses, like learning by heart
					most of Microsoft Office buttons (don't ask why, I don't know either), but most of it was quite
					useful.
				</StyledColumn>
			</StyledFlexContainer>
		</Section>
	);
};

export default Education;
