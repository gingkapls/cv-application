import { Dispatch, SetStateAction, useState } from 'react';
import ExperienceForm, { ExperienceDetails } from './ExperienceForm';

interface ExperienceProps {
  id: string;
  experienceDetails: ExperienceDetails[];
  setExperienceDetails: Dispatch<SetStateAction<ExperienceDetails[]>>;
}

function Experience({
  id,
  experienceDetails,
  setExperienceDetails,
}: ExperienceProps) {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }
  function handleDelete() {
      const newDetails = experienceDetails.filter(detail => detail.id !== id);
      setExperienceDetails(newDetails);
  }

  return (
    <div className='education'>
      <button type='button' className='btn-toggle' onClick={handleToggle}>
        Toggle Me
      </button>
      <button type='button' className='btn-close' onClick={handleDelete}>
        X
      </button>
      {isActive && (
        <ExperienceForm
          id={id}
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      )}
    </div>
  );
}

export default Experience;