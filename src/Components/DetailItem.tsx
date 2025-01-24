import { Dispatch, SetStateAction } from 'react';
import { UUIDString } from '../lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface DetailItemProps {
  id: UUIDString;
  title: string;
  isVisible: boolean;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
  toggleHide: (id: UUIDString) => void;
}

function DetailItem({
  id,
  title,
  isVisible,
  setActiveId,
  toggleHide,
}: DetailItemProps) {
  return (
    <li className={`detail-item${isVisible ? ' visible' : ''}`}>
      <button className='item-title' onClick={() => setActiveId(id)}>
        {title}
      </button>
      <button className='item-hide' onClick={() => toggleHide(id)}>
        <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
      </button>
    </li>
  );
}

export default DetailItem;
