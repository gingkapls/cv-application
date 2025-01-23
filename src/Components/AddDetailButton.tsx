import { Dispatch, SetStateAction } from 'react';
import { EducationDetails } from './EducationForm';
import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';
import { UUIDString } from '../lib/types';

type ClassType = EducationDetails | ExperienceDetails | ProjectDetails;

const DetailType = {
    EducationDetails: 'Education',
    ExperienceDetails: 'Experience',
    ProjectDetails: 'Project',
}

interface AddDetailButtonProps {
  text: string;
  className: string;
  details: ClassType[];
  setDetails: Dispatch<SetStateAction<ClassType[]>>;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
  type: new (...args: unknown[]) => ClassType;
}
function AddDetailButton({
  text,
  className,
  details,
  setDetails,
  type,
  setActiveId,
}: AddDetailButtonProps) {
  return (
    <button
      onClick={() => {
        const newDetails = new type();
        setDetails(details.concat(newDetails));
        setActiveId(newDetails.id);
      }}
    >
      Add new {text}
    </button>
  );
}
