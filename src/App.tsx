import { useState } from 'react';
import './App.css';
import ContactForm, { ContactDetails } from './Components/ContactForm';
import { ContactPreview } from './Components/ContactPreview';
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
import ProjectForm, { ProjectDetails } from './Components/ProjectForm';

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
      <ContactForm
        contactDetails={contactDetails}
        setContactDetails={setContactDetails}
      />
      <Education
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
      />
    </>
  );
}

export default App;
