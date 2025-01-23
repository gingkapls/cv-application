import { ContactDetails } from './ContactForm';

function ContactPreview({
  contactDetails,
}: {
  contactDetails: ContactDetails;
}) {
  const { fullName, phoneNumber, github, linkedIn, gmail } = contactDetails;
  return (
    <div className='contact-preview detail-preview'>
      <h2 className='full-name'>{fullName}</h2>
      <span className='phone-number'>{phoneNumber}</span>
      <span className='github'>{github}</span>
      <span className='linkedIn'>{linkedIn}</span>
      <span className='gmail'>{gmail}</span>
    </div>
  );
}

export default ContactPreview;
