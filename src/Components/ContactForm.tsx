import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from './Input';

interface ContactDetails {
  fullName: string;
  phoneNumber: string;
  github: string;
  linkedIn: string;
  gmail: string;
}

interface ContactFormProps {
  contactDetails: ContactDetails;
  setContactDetails: Dispatch<SetStateAction<ContactDetails>>;
}

function ContactForm({ contactDetails, setContactDetails }: ContactFormProps) {
  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value.trimStart();

    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Please don\'t use special characters');
      e.target.reportValidity();
      return;
    }

    e.target.setCustomValidity('');
    const newDetails = { ...contactDetails, [field]: value };
    setContactDetails(newDetails);
  }

  const { fullName, phoneNumber, github, linkedIn, gmail } = contactDetails;
  return (
    <form className='contact details'>
      <h2 className='section-heading'>Personal Details</h2>
      <Input
        label='Full Name: '
        name='fullName'
        value={fullName}
        placeholder='e.g. John Doe'
        hint='recommended'
        onChange={handleFieldChange}
      />
      <Input
        label='Phone Number'
        name='phoneNumber'
        type='tel'
        value={phoneNumber}
        placeholder='e.g. +91 123-456-7890'
        pattern='[+]?([0-9]|-|\s)*'
        onChange={handleFieldChange}
      />
      <Input
        label='Github Profile'
        name='github'
        value={github}
        placeholder='e.g. torvalds'
        pattern='[^\!\#\$\%\^\&\*\(\)\\\|\[\]\{\}\;\:]*'
        onChange={handleFieldChange}
      />
      <Input
        label='LinkedIn Profile'
        name='linkedIn'
        value={linkedIn}
        pattern='[^\!\#\$\%\^\&\*\(\)\\\|\[\]\{\}\;\:]*'
        placeholder='e.g. linustorvalds'
        onChange={handleFieldChange}
      />
      <Input
        label='E-mail address'
        type='email'
        name='gmail'
        value={gmail}
        pattern='[^\!\#\$\%\^\&\*\(\)\\\|\[\]\{\}\;\:]*'
        placeholder='e.g. linus@linuxfoundation.org'
        onChange={handleFieldChange}
      />
    </form>
  );
}

export type { ContactDetails, ContactFormProps };
export default ContactForm;
