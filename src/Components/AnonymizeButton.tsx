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
  const text = isAnonymized ? 'De-anonymize CV' : 'Anonymize CV';
  return (
    <button
      className='btn-anon btn'
      onClick={() => setIsAnonymized(!isAnonymized)}
      aria-label={text}
      title={text}
    >
      <FontAwesomeIcon icon={isAnonymized ? faUser : faUserSecret} />
    </button>
  );
}

export default AnonymizeButton;
