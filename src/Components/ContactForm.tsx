import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from './Input';

class ContactDetails {
  fullName: string;
  phoneNumber: string;
  github: string;
  linkedIn: string;
  gmail: string;

  constructor({
    fullName = '',
    phoneNumber = '',
    github = '',
    linkedIn = '',
    gmail = '',
  }) {
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.github = github;
    this.linkedIn = linkedIn;
    this.gmail = gmail;
  }
}

interface ContactFormProps {
  contactDetails: ContactDetails;
  setContactDetails: Dispatch<SetStateAction<ContactDetails>>;
}

function ContactForm({ contactDetails, setContactDetails }: ContactFormProps) {
  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...contactDetails, [field]: value };
    setContactDetails(newDetails);
  }

  const { fullName, phoneNumber, github, linkedIn, gmail } = contactDetails;
  return (
    <form className='contact-details details'>
      <h3>Personal Details</h3>
      <Input
        label='Full Name: '
        name='fullName'
        value={fullName}
        onChange={handleFieldChange}
      />
      <Input
        label='Phone Number'
        name='phoneNumber'
        value={phoneNumber}
        onChange={handleFieldChange}
      />
      <Input
        label='Github Profile'
        name='github'
        value={github}
        onChange={handleFieldChange}
      />
      <Input
        label='LinkedIn Profile'
        name='linkedIn'
        value={linkedIn}
        onChange={handleFieldChange}
      />
      <Input
        label='E-mail address'
        type='email'
        name='gmail'
        value={gmail}
        onChange={handleFieldChange}
      />
    </form>
  );
}

export type { ContactFormProps };
export { ContactDetails };
export default ContactForm;
