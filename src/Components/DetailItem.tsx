import { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faCircleDown,
  faCircleUp,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
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

function moveUp<T extends EnumerableDetails>(
  index: number,
  details: T[],
  setDetails: Dispatch<SetStateAction<T[]>>
) {
  if (index === 0) return;

  const newDetails = [...details];
  const prevEl = newDetails[index - 1];
  newDetails[index - 1] = newDetails[index];
  newDetails[index] = prevEl;

  setDetails(newDetails);
}

function moveDown<T extends EnumerableDetails>(
  index: number,
  details: T[],
  setDetails: Dispatch<SetStateAction<T[]>>
) {
  if (index >= details.length - 1) return;

  const newDetails = [...details];
  const nextEl = newDetails[index + 1];
  newDetails[index + 1] = newDetails[index];
  newDetails[index] = nextEl;

  setDetails(newDetails);
}

function DetailItem<T extends EnumerableDetails>({
  id,
  title,
  isVisible,
  details,
  setDetails,
  setActiveId,
}: DetailItemProps<T>) {
  const index = details.findIndex((detail) => detail.id === id);
  const isFirst = index === 0;
  const isLast = index === details.length - 1;

  return (
    <li className={`detail-item${isVisible ? ' visible' : ''}`}>
      <div className='btn-arrow-container'>
        {!isFirst && (
          <button
            className='btn-arrow'
            onClick={() => moveUp(index, details, setDetails)}
          >
            <FontAwesomeIcon icon={faArrowUp} className='fa-xl' />
          </button>
        )}
        {!isLast && (
          <button
            className='btn-arrow'
            onClick={() => moveDown(index, details, setDetails)}
          >
            <FontAwesomeIcon icon={faArrowDown} className='fa-xl' />
          </button>
        )}
      </div>
      <button className='item-title' onClick={() => setActiveId(id)}>
        {title}
      </button>
      <button
        className='item-hide'
        onClick={() => toggleHide(id, details, setDetails)}
      >
        <FontAwesomeIcon
          icon={isVisible ? faEye : faEyeSlash}
          className='fa-xl'
        />
      </button>
    </li>
  );
}

export default DetailItem;
