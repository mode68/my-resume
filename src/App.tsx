import Layout from './components/Layout';
import Navigation from './components/Navigation';
import { StyledSectionContainer } from './shared/styled/SectionComponents';
import TitlePage from './pages/Title';
import ProfilePage from './pages/Profile';
import EducationPage from './pages/Education';
import ExperiencePage from './pages/Experience';
import SkillsPage from './pages/Skills';
import ContactPage from './pages/Contact';

function App() {
	return (
		<Layout>
			<TitlePage />
			<Navigation />
			<StyledSectionContainer>
				<ProfilePage />
				<EducationPage />
				<ExperiencePage />
				<SkillsPage />
				<ContactPage />
			</StyledSectionContainer>
		</Layout>
	);
}

export default App;
