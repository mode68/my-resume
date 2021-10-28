import Layout from './components/Layout';
import Navigation from './components/Navigation';
import { StyledSectionContainer } from './shared/styledComponents';
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
        <StyledSectionContainer>
          <Navigation />
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
