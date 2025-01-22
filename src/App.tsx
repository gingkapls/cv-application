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
} from './lib/initialState';
import { ProjectDetails } from './Components/ProjectForm';
import Project from './Components/Project';
import Sidebar from './Components/Sidebar';
import Preview from './Components/Preview';
import ContactPreview from './Components/ContactPreview';

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
      </Sidebar>
      <Preview>
        <ContactPreview contactDetails={contactDetails} />
      </Preview>
    </>
  );
}

export default App;
