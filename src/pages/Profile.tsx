import Section from '../components/Section';
import { StyledSubtitle, StyledColumn, StyledFlexContainer } from '../shared/styled/GeneralComponents';
import { StyledProfilePic } from '../shared/styled/ProfileComponents';
import ProfilePic from '../assets/Stephen-Curry.jpg';

const Profile = () => {
	return (
		<Section name={'Profile'} subtitle={"I'm an enthusiasthic JavaScript developer"}>
			<StyledFlexContainer>
				<StyledColumn flexPercentage='30%'>
					<StyledSubtitle>About me</StyledSubtitle>I specialise in frontend, but someday I want to become good
					enough to be called an allround developer. The things I enjoy most about programming is probably
					predictability and stability. If something is wrong with your code, then it's a 99,99% probability
					that you did something wrong. I feel like you don't get that in any other line of work.
				</StyledColumn>
				<StyledColumn flexPercentage='30%'>
					<StyledProfilePic src={ProfilePic}></StyledProfilePic>
				</StyledColumn>
				<StyledColumn flexPercentage='30%'>
					<StyledSubtitle>Details</StyledSubtitle>
					<b>Name: </b>
					<br />
					Modestas Kairys
					<br />
					<b>Age: </b>
					<br />
					27
					<br />
					<b>Location: </b>
					<br />
					Vilnius, Lithuania
					<br />
				</StyledColumn>
			</StyledFlexContainer>
			During my free time I love playing basketball and video games. I'm also your guy if you ever need a good
			recommendation for an anime.
		</Section>
	);
};

export default Profile;
