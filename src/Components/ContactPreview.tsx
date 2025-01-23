import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactDetails } from './ContactForm';
import {
  faEnvelope,
  faHouse,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactPreview({
  contactDetails,
}: {
  contactDetails: ContactDetails;
}) {
  const { fullName, phoneNumber, github, linkedIn, gmail } = contactDetails;
  return (
    <address className='contact-preview detail-preview'>
      <h2 className='full-name'>{fullName}</h2>
      <span className='phone-number'>
        <FontAwesomeIcon icon={faPhone} />
        <a href={`tel: ${phoneNumber}`}>{phoneNumber}</a>
      </span>
      <span className='github'>
        <FontAwesomeIcon icon={faGithub} />
        <a href={`https://github.com/${github}`}>{github}</a>
      </span>
      <span className='linkedIn'>
        <FontAwesomeIcon icon={faLinkedin} />
        <a href={`https://linkedin.com/in/${linkedIn}`}>{linkedIn}</a>
      </span>
      <span className='gmail'>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${gmail}`}>{gmail}</a>
      </span>
    </address>
  );
}

export default ContactPreview;
