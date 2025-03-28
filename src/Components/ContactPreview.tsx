import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactDetails } from './ContactForm';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { anonymizeDetails } from '../lib/anonymizeDetails';

function ContactPreview({
  contactDetails,
  isAnonymized,
}: {
  contactDetails: ContactDetails;
  isAnonymized: boolean;
}) {
  const { fullName, phoneNumber, github, linkedIn, gmail } = anonymizeDetails(
    contactDetails,
    isAnonymized
  );
  return (
    <address className='contact-preview detail-preview'>
      {fullName && <h2 className='full-name'>{fullName}</h2>}
      {phoneNumber && (
        <span className='phone-number'>
          <FontAwesomeIcon icon={faPhone} />
          <a
            target='_blank'
            href={`tel: ${phoneNumber}`}
            rel='noopener noreferrer'
          >
            {phoneNumber}
          </a>
        </span>
      )}
      {github && (
        <span className='github'>
          <FontAwesomeIcon icon={faGithub} />
          <a
            target='_blank'
            href={`https://github.com/${github}`}
            rel='noopener noreferrer'
          >
            github.com/{github}
          </a>
        </span>
      )}
      {linkedIn && (
        <span className='linkedIn'>
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            target='_blank'
            href={`https://linkedin.com/in/${linkedIn}`}
            rel='noopener noreferrer'
          >
            linkedin.com/in/{linkedIn}
          </a>
        </span>
      )}
      {gmail && (
        <span className='gmail'>
          <FontAwesomeIcon icon={faEnvelope} />
          <a target='_blank' href={`mailto:${gmail}`} rel='noopener noreferrer'>
            {gmail}
          </a>
        </span>
      )}
    </address>
  );
}

export default ContactPreview;
