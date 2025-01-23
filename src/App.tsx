import { useState } from 'react';
import './App.css';
import ContactForm, { ContactDetails } from './Components/ContactForm';
import { EducationDetails } from './Components/EducationForm';
import Education from './Components/Education';
import { ExperienceDetails } from './Components/ExperienceForm';
import Experience from './Components/Experience';
import {
  initialContactDetails,
  initialEducationDetails,
  initialExperienceDetails,
  initialProjectDetails,
  initialSkillsDetails,
} from './lib/initialState';
import { ProjectDetails } from './Components/ProjectForm';
import Project from './Components/Project';
import Sidebar from './Components/Sidebar';
import Preview from './Components/Preview';
import ContactPreview from './Components/ContactPreview';
import EducationPreview from './Components/EducationPreview';
import ExperiencePreview from './Components/ExperiencePreview';
import ProjectPreview from './Components/ProjectPreview';
import SkillsForm, { SkillsDetails } from './Components/SkillsForm';
import SkillsPreview from './Components/SkillsPreview';

function App() {
  const [contactDetails, setContactDetails] = useState<ContactDetails>(
    initialContactDetails
  );

  const [educationDetails, setEducationDetails] = useState<EducationDetails[]>(
    initialEducationDetails
  );

  const [experienceDetails, setExperienceDetails] = useState<
    ExperienceDetails[]
  >(initialExperienceDetails);

  const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>(
    initialProjectDetails
  );

  const [skillsDetails, setSkillsDetails] =
    useState<SkillsDetails>(initialSkillsDetails);

  return (
    <>
      <Sidebar>
        <ContactForm
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
        />
        <Education
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
        <Experience
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
        <Project
          projectDetails={projectDetails}
          setProjectDetails={setProjectDetails}
        />

        <SkillsForm
          skillsDetails={skillsDetails}
          setSkillsDetails={setSkillsDetails}
        />
      </Sidebar>
      <Preview>
        <ContactPreview contactDetails={contactDetails} />
        <EducationPreview educationDetails={educationDetails} />
        <ExperiencePreview experienceDetails={experienceDetails} />
        <ProjectPreview projectDetails={projectDetails} />
        <SkillsPreview skillsDetails={skillsDetails} />
      </Preview>
    </>
  );
}

export default App;
