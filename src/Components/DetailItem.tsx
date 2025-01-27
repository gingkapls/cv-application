import { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UUIDString } from '../lib/uniqueId';
import { EducationDetails } from './EducationForm';
import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';

type EnumerableDetails = EducationDetails | ExperienceDetails | ProjectDetails;

interface DetailItemProps<T extends EnumerableDetails> {
  id: UUIDString;
  title: string;
  isVisible: boolean;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
  details: T[];
  setDetails: Dispatch<SetStateAction<T[]>>;
}

function toggleHide<T extends EnumerableDetails>(
  id: UUIDString,
  details: T[],
  setDetails: Dispatch<SetStateAction<T[]>>
) {
  const oldDetails = details.find((detail) => detail.id === id)!;
  const newDetails = { ...oldDetails, isVisible: !oldDetails.isVisible };

  setDetails(
    details.map((detail) => {
      if (detail.id === oldDetails.id) return newDetails;
      return detail;
    })
  );
}

function DetailItem<T extends EnumerableDetails>({
  id,
  title,
  isVisible,
  details,
  setDetails,
  setActiveId,
}: DetailItemProps<T>) {
  return (
    <li className={`detail-item${isVisible ? ' visible' : ''}`}>
      <button className='item-title' onClick={() => setActiveId(id)}>
        {title}
      </button>
      <button
        className='item-hide'
        onClick={() => toggleHide(id, details, setDetails)}
      >
        <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
      </button>
    </li>
  );
}

export default DetailItem;
