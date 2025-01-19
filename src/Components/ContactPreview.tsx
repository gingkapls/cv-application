import { ContactDetails } from './ContactForm';

export function ContactPreview({
  contactDetails,
}: {
  contactDetails: ContactDetails;
}) {
  return (
    <div className='contact-preview'>
      {Object.entries(contactDetails).map(([k, v]) => {
        return (
          <li key={k}>
            {k} - {v}
          </li>
        );
      })}
    </div>
  );
}
