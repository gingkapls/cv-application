import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from './Input';

export class ContactDetails {
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
  id?: string;
  setContactDetails: Dispatch<SetStateAction<ContactDetails>>;
}

function ContactForm({ contactDetails, setContactDetails }: ContactFormProps) {
  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...contactDetails, [field]: value };
    setContactDetails(newDetails);
  }

  return (
    <form className='contact-details' action=''>
      <h3>Personal Details</h3>
      <Input
        label='Full Name: '
        name='fullName'
        value={contactDetails.fullName}
        onChange={handleFieldChange}
      />
      <Input
        label='Phone Number'
        name='phoneNumber'
        value={contactDetails.phoneNumber || ''}
        onChange={handleFieldChange}
      />
      <Input
        label='Github Profile'
        name='github'
        value={contactDetails.github || ''}
        onChange={handleFieldChange}
      />
      <Input
        label='LinkedIn Profile'
        name='linkedIn'
        value={contactDetails.linkedIn || ''}
        onChange={handleFieldChange}
      />
      <Input
        label='E-mail address'
        type='email'
        name='gmail'
        value={contactDetails.gmail || ''}
        onChange={handleFieldChange}
      />
    </form>
  );
}

export default ContactForm;
