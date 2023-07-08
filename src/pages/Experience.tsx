import Section from '../components/Section';
import {
	StyledSubtitle,
	StyledSmallestSubtitle,
	StyledColumn,
	StyledFlexContainer,
} from '../shared/styled/GeneralComponents';

const Experience = () => {
	return (
		<Section
			name={'Experience'}
			subtitle={
				"I'm thankful for everything I had to experience, good or bad, because it made me stronger and I met a lot of great people along the way"
			}
		>
			<StyledFlexContainer marginBottom>
				<StyledColumn flexPercentage='35%'>
					<StyledSubtitle fontWeight='500'>UAB Amidus</StyledSubtitle>Apr 2016 - May 2017
				</StyledColumn>
				<StyledColumn flexPercentage='65%'>
					<StyledSmallestSubtitle>Full time - Software Engineer</StyledSmallestSubtitle>My first real job
					right before graduating university. Our company provided custom SharePoint solutions. Since Amidus
					wasn't very big, we as developers were able to get our hands on the whole project scope, being
					versatile was important. My main responsibilities included writing backend services on .NET, various
					scripting tasks using PowerShell, filling out documentations and later on I even got to dabble with
					some frontend JavaScript. Back then I was more orientated as a backend developer.
				</StyledColumn>
			</StyledFlexContainer>
			<StyledFlexContainer marginBottom>
				<StyledColumn flexPercentage='35%'>
					<StyledSubtitle fontWeight='500'>Danske Bank</StyledSubtitle>Aug 2017 - Jul 2019
				</StyledColumn>
				<StyledColumn flexPercentage='65%'>
					<StyledSmallestSubtitle>Full time - Software Engineer</StyledSmallestSubtitle>I was starting to get
					interested in JavaScript, and how big companies operate on larger scale projects, thus I got invited
					to work in Danske Bank. Working there gave me a broader perspective on how companies approach coding
					solution. Main work tool was a platform called BPM made by IBM. It relied on vanilla JavaScript to
					produce a full solution for bank's internal system. Working there felt quite different, because we
					were working in bigger teams, developers usually were encouraged to specialize in their own field,
					and communicating with clients, at least for me, was almost a daily thing.
				</StyledColumn>
			</StyledFlexContainer>
			<StyledFlexContainer>
				<StyledColumn flexPercentage='35%'>
					<StyledSubtitle fontWeight='500'>Global Step Academy</StyledSubtitle>Dec 2019 - Jan 2021
				</StyledColumn>
				<StyledColumn flexPercentage='65%'>
					<StyledSmallestSubtitle>Contract - English Second Language Teacher</StyledSmallestSubtitle>During
					the summer of 2019 Japan's embassy introcuded first working visas in Lithuania. I viewed this as a
					golden opportunity to fulfill my dream of living in Japan for an extended period of time. Finding
					any type of work in Japan as a foreigner isn't easy, especially when you don't speak Japanese. I
					opted to put a pause on my programming career and start working as an English teacher for children
					under 12yo. Even though this long break without programming might have become a "dent" in my resume,
					I still have zero regrets, because I got to fulfill my dream.
				</StyledColumn>
			</StyledFlexContainer>
			<StyledFlexContainer>
				<StyledColumn flexPercentage='35%'>
					<StyledSubtitle fontWeight='500'>Telia</StyledSubtitle>Dec 2021 - Now
				</StyledColumn>
				<StyledColumn flexPercentage='65%'>
					<StyledSmallestSubtitle>Full time - Frotend Software Engineer</StyledSmallestSubtitle>After coming
					back from Japan, I was eager to learn a modern JS framework. Since I had encoutered React before, in
					Amidus, I decided to git it a go. Telia has accepted me and I'm having fun, learning something new
					everyday.
				</StyledColumn>
			</StyledFlexContainer>
		</Section>
	);
};

export default Experience;
