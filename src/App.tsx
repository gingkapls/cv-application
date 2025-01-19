import { useState } from 'react';
import './App.css';
import ContactForm, { ContactDetails } from './Components/ContactForm';
import { ContactPreview } from './Components/ContactPreview';
import EducationForm, { EducationDetails } from './Components/EducationForm';

function App() {
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    fullName: '',
    phoneNumber: '',
    github: '',
    linkedIn: '',
    gmail: '',
  });

  const [educationDetails, setEducationDetails] = useState<EducationDetails[]>([
    {
      id: '1',
      collegeName: 'Test College',
      degree: 'MCA',
      gpa: '9.4',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '2',
      collegeName: 'Test College',
      degree: 'BCA',
      gpa: '9.4',
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  return (
    <>
      <ContactForm
        contactDetails={contactDetails}
        setContactDetails={setContactDetails}
      />

      <ContactPreview contactDetails={contactDetails} />
      {educationDetails.map((details) => {
        return (
          <EducationForm
            id={details.id}
            key={details.id}
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
          />
        );
      })}
    </>
  );
}

export default App;
