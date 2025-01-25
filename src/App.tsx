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

function App() {
  const [isAnonymized, setIsAnonymized] = useState(false);

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
