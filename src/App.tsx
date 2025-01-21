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
} from './lib/initialState';

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
        Add new form
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
    </>
  );
}

export default App;
