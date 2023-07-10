import Section from '../components/Section';
import {
	StyledColumn,
	StyledFlexContainer,
	StyledSubtitle,
	StyledUl,
	StyledLi,
} from '../shared/styled/GeneralComponents';
import StarScore from '../components/StarScore';

const Skills = () => {
	const skills = [
		{ name: 'JavaScript', rating: 5 },
		{ name: 'HTML', rating: 5 },
		{ name: 'JSON', rating: 5 },
		{ name: 'XML', rating: 5 },
		{ name: 'CSS', rating: 4 },
		{ name: 'React', rating: 4 },
		{ name: 'Object Orientated Programming', rating: 4 },
		{ name: 'Git', rating: 3 },
		{ name: 'GitHub', rating: 3 },
		{ name: 'BitBucket', rating: 3 },
	];
	const skills2 = [
		{ name: 'TypeScript', rating: 3 },
		{ name: 'Jest', rating: 3 },
		{ name: 'Node.js', rating: 3 },
		{ name: 'Scrum', rating: 3 },
		{ name: 'Jira', rating: 2 },
		{ name: 'Splunk', rating: 2 },
		{ name: 'MongoDB', rating: 2 },
		{ name: 'Express', rating: 1 },
		{ name: 'Java', rating: 1 },
		{ name: '.NET', rating: 1 },
	];
	const languages = [
		{ name: 'Lithuanian (mother tongue)', rating: 5 },
		{ name: 'English (daily use)', rating: 5 },
		{ name: 'Japanese (survivable)', rating: 2 },
	];
	return (
		<Section name={'Skills'} subtitle={'Not a game. We talking about practice.'}>
			<StyledFlexContainer>
				<StyledColumn flexPercentage='47%'>
					<StyledUl>
						{skills.map((skill) => (
							<StyledLi key={skill.name}>
								<StarScore name={skill.name} score={skill.rating} />
							</StyledLi>
						))}
					</StyledUl>
				</StyledColumn>
				<StyledColumn flexPercentage='47%'>
					<StyledUl>
						{skills2.map((skill) => (
							<StyledLi key={skill.name}>
								<StarScore name={skill.name} score={skill.rating} />
							</StyledLi>
						))}
					</StyledUl>
				</StyledColumn>
			</StyledFlexContainer>
			<StyledSubtitle>Languages</StyledSubtitle>
			<StyledFlexContainer>
				<StyledColumn flexPercentage='47%'>
					<StyledUl>
						{languages.map((skill) => (
							<StyledLi key={skill.name}>
								<StarScore name={skill.name} score={skill.rating} />
							</StyledLi>
						))}
					</StyledUl>
				</StyledColumn>
			</StyledFlexContainer>
		</Section>
	);
};

export default Skills;
