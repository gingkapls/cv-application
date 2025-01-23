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

  function handleClick() {
    const newDetails = new EducationDetails();
    setEducationDetails(educationDetails.concat(newDetails));
    setActiveId(newDetails.id);
  }

  function toggleHide(id: UUIDString) {
    const oldDetails = educationDetails.find((detail) => detail.id === id)!;
    const newDetails = oldDetails.clone();
    newDetails.hidden = !newDetails.hidden;

    setEducationDetails(
      educationDetails.map((detail) => {
        if (detail.id === oldDetails.id) return newDetails;
        return detail;
      })
    );
  }

  return (
    <div className='education details'>
      <h3>Education</h3>
      {activeDetail === null || activeDetail === undefined ? (
        educationDetails
          .map((detail) => (
            <DetailItem
              key={detail.id}
              id={detail.id}
              title={detail.collegeName}
              setActiveId={setActiveId}
              toggleHide={() => toggleHide(detail.id)}
            />
          ))
          .concat(
            <button key='btnAdd' className='btn-add' onClick={handleClick}>
              + Education
            </button>
          )
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
