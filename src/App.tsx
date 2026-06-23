import { cvData } from './data'
import Header from './components/Header'
import ProfileSection from './components/ProfileSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'

function App() {
  return (
    <>
      <Header
        name={cvData.name}
        title={cvData.title}
        location={cvData.location}
        email={cvData.email}
        languages={cvData.languages}
        linkedin={cvData.linkedin}
        github={cvData.github}
      />
      <ProfileSection profile={cvData.profile} />
      <SkillsSection skills={cvData.skills} />
      <ExperienceSection items={cvData.experience} />
      <EducationSection items={cvData.education} />
    </>
  )
}

export default App
