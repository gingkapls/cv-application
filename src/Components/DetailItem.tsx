import { Dispatch, SetStateAction } from 'react';
import { UUIDString } from '../lib/types';
interface DetailItemProps {
  id: UUIDString;
  title: string;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
}

function DetailItem({ id, title, setActiveId }: DetailItemProps) {
  return (
    <li>
      <button className='detail-item-title' onClick={() => setActiveId(id)}>{title}</button>
      <button className='detail-item-hide'>Hide me</button>
    </li>
  );
}

export default DetailItem;
