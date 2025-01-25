import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';

interface AnonymizeButtonProps {
  isAnonymized: boolean;
  setIsAnonymized: Dispatch<SetStateAction<boolean>>;
}

function AnonymizeButton({
  isAnonymized,
  setIsAnonymized,
}: AnonymizeButtonProps) {
  return (
    <button className='btn-anon' onClick={() => setIsAnonymized(!isAnonymized)}>
      {isAnonymized ? 'De-anonymize CV' : 'Anonymize CV'}
      <FontAwesomeIcon icon={isAnonymized ? faUser : faUserSecret} />
    </button>
  );
}

export default AnonymizeButton;
