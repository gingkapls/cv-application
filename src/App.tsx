import { useState } from 'react';
import './App.css';
import ContactForm, { ContactDetails } from './Components/ContactForm';
import { EducationDetails } from './Components/EducationForm';
import Education from './Components/Education';
import { ExperienceDetails } from './Components/ExperienceForm';
import Experience from './Components/Experience';
import { ProjectDetails } from './Components/ProjectForm';
import Project from './Components/Project';
import Sidebar from './Components/Sidebar';
import Preview from './Components/Preview';
import SkillsForm, { SkillsDetails } from './Components/SkillsForm';
import {
  initialContactDetails,
  initialEducationDetails,
  initialExperienceDetails,
  initialProjectDetails,
  initialSkillsDetails,
} from './lib/initialState';
import AnonymizeButton from './Components/AnonymizeButton';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isAnonymized, setIsAnonymized] = useState(false);

  const [contactDetails, setContactDetails] = useLocalStorage<ContactDetails>(
    'contactDetails',
    initialContactDetails
  );

  const [educationDetails, setEducationDetails] = useLocalStorage<
    EducationDetails[]
  >('educationDetails', initialEducationDetails);

  const [experienceDetails, setExperienceDetails] = useLocalStorage<
    ExperienceDetails[]
  >('experienceDetails', initialExperienceDetails);

  const [projectDetails, setProjectDetails] = useLocalStorage<ProjectDetails[]>(
    'projectDetails',
    initialProjectDetails
  );

  const [skillsDetails, setSkillsDetails] = useLocalStorage<SkillsDetails>(
    'skillsDetails',
    initialSkillsDetails
  );

  return (
    <>
      <Sidebar>
        <AnonymizeButton
          isAnonymized={isAnonymized}
          setIsAnonymized={setIsAnonymized}
        />

        <ContactForm
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
        />
        <Experience
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
        <Education
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
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
      <Preview
        isAnonymized={isAnonymized}
        contactDetails={contactDetails}
        educationDetails={educationDetails}
        experienceDetails={experienceDetails}
        projectDetails={projectDetails}
        skillsDetails={skillsDetails}
      />
    </>
  );
}

export default App;
