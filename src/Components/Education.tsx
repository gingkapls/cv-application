import { Dispatch, SetStateAction, useState } from 'react';
import EducationForm, { EducationDetails } from './EducationForm';
import DetailItem from './DetailItem';
import { UUIDString } from '../lib/types';

interface EducationProps {
  educationDetails: EducationDetails[];
  setEducationDetails: Dispatch<SetStateAction<EducationDetails[]>>;
}

function Education({ educationDetails, setEducationDetails }: EducationProps) {
  const [activeId, setActiveId] = useState<UUIDString | null>(null);

  const activeDetail =
    activeId && educationDetails.find((detail) => detail.id === activeId);

  return (
    <div className='education'>
    <h3>Education</h3>
      <button
        onClick={() => {
          const newDetails = new EducationDetails();
          setEducationDetails(educationDetails.concat(newDetails));
          setActiveId(newDetails.id);
        }}
      >
        Add new education
      </button>

      {activeDetail === null || activeDetail === undefined ? (
        educationDetails.map((detail) => (
          <DetailItem
            key={detail.id}
            id={detail.id}
            title={detail.collegeName}
            setActiveId={setActiveId}
          />
        ))
      ) : (
        <EducationForm
          key={activeDetail.id}
          id={activeDetail.id}
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          setActiveId={setActiveId}
        />
      )}
    </div>
  );
}

export type { EducationProps };
export default Education;
