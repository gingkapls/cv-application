import { Dispatch, SetStateAction, useState } from 'react';
import EducationForm, { EducationDetails } from './EducationForm';

interface EducationProps {
  id: string;
  educationDetails: EducationDetails[];
  setEducationDetails: Dispatch<SetStateAction<EducationDetails[]>>;
}

function Education({
  id,
  educationDetails,
  setEducationDetails,
}: EducationProps) {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }
  function handleDelete() {
    const newDetails = educationDetails.filter((detail) => detail.id !== id);
    setEducationDetails(newDetails);
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
        <EducationForm
          id={id}
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
      )}
    </div>
  );
}

export default Education;
