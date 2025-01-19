import { useState } from 'react';
import './App.css';
import ContactForm, { ContactDetails } from './Components/ContactForm';
import { ContactPreview } from './Components/ContactPreview';

function App() {
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    fullName: '',
    phoneNumber: '',
    github: '',
    linkedIn: '',
    gmail: '',
  });

  return (
    <>
      <ContactForm
        contactDetails={contactDetails}
        setContactDetails={setContactDetails}
      />
      <ContactPreview contactDetails={contactDetails} />
    </>
  );
}

export default App;
