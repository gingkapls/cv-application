import { Dispatch, SetStateAction } from 'react';
import { UUIDString } from '../lib/types';

interface DetailItemProps {
  id: UUIDString;
  title: string;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
  toggleHide: (id: UUIDString) => void;
}

function DetailItem({ id, title, setActiveId, toggleHide }: DetailItemProps) {
  return (
    <li className='detail-item'>
      <button className='item-title' onClick={() => setActiveId(id)}>
        {title}
      </button>
      <button className='item-hide' onClick={() => toggleHide(id)}>
        X
      </button>
    </li>
  );
}

export default DetailItem;
