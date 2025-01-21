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
  
  const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>(initialProjectDetails);

  return (
    <>
      <ContactForm
        contactDetails={contactDetails}
        setContactDetails={setContactDetails}
      />

      <ContactPreview contactDetails={contactDetails} />

      <button
        onClick={() =>
          setEducationDetails(educationDetails.concat(new EducationDetails({})))
        }
      >
        Add new education
      </button>

      {educationDetails.map((details) => {
        return (
          <Education
            id={details.id}
            key={details.id}
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
          />
        );
      })}

      {experienceDetails.map((details) => {
        return (
          <Experience
            id={details.id}
            key={details.id}
            experienceDetails={experienceDetails}
            setExperienceDetails={setExperienceDetails}
          />
        );
      })}
      
      {projectDetails.map((details) => {
        return (
          <ProjectForm
            id={details.id}
            key={details.id}
            projectDetails={projectDetails}
            setProjectDetails={setProjectDetails}
          />
        );
      })}

    </>
  );
}

export default App;
