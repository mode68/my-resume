import Section from '../components/Section';
import { StyledSubtitle, StyledColumn, StyledFlexContainer } from '../shared/styled/GeneralComponents';
import { StyledProfilePic } from '../shared/styled/ProfileComponents';
import ProfilePic from '../assets/ProfileImage.jpg';

const Profile = () => {
	return (
		<Section name={'Profile'} subtitle={"I'm an enthusiasthic JavaScript developer"}>
			<StyledFlexContainer>
				<StyledColumn flexPercentage='30%'>
					<StyledSubtitle>About me</StyledSubtitle>I specialize in frontend, but someday I want to become good
					enough to be called an allround developer. The things I value most about programming is probably
					predictability and stability. If something is wrong with your code, then it's a 99.9% probability
					that you did something wrong. I feel like you rarely can find that in other lines of work and I'm
					happy to call myself a software developer.
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
					29
					<br />
					<b>Location: </b>
					<br />
					Vilnius, Lithuania
					<br />
				</StyledColumn>
			</StyledFlexContainer>
			During my free time I love playing basketball and video games. Other hobbies include - reading books (I
			especially appreciate fantasy genre), cooking and watching anime.
		</Section>
	);
};

export default Profile;
