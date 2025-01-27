import { Dispatch, SetStateAction, useState } from 'react';
import EducationForm, { EducationDetails } from './EducationForm';
import DetailItem from './DetailItem';
import generateUniqueId, { UUIDString } from '../lib/uniqueId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface EducationProps {
  educationDetails: EducationDetails[];
  setEducationDetails: Dispatch<SetStateAction<EducationDetails[]>>;
}

function Education({ educationDetails, setEducationDetails }: EducationProps) {
  const [activeId, setActiveId] = useState<UUIDString | null>(null);

  const activeDetail =
    activeId && educationDetails.find((detail) => detail.id === activeId);

  function handleClick() {
    const newDetails = {
      id: generateUniqueId(),
      collegeName: '',
      degree: '',
      gpa: '',
      coursework: '',
      isVisible: true,
      startDate: new Date().toJSON(),
      endDate: new Date().toJSON(),
    } satisfies EducationDetails;

    setEducationDetails([newDetails, ...educationDetails]);
    setActiveId(newDetails.id);
  }

  const form = activeDetail && (
    <EducationForm
      key={activeDetail.id}
      id={activeDetail.id}
      educationDetails={educationDetails}
      setEducationDetails={setEducationDetails}
      setActiveId={setActiveId}
    />
  );

  const detailList = (
    <>
      {educationDetails.map((detail, index) => (
        <DetailItem
          key={detail.id}
          id={detail.id}
          title={detail.collegeName || `College ${index + 1}`}
          isVisible={detail.isVisible}
          setActiveId={setActiveId}
          details={educationDetails}
          setDetails={setEducationDetails}
        />
      ))}
      <button key='btnAdd' className='btn-add btn' onClick={handleClick}>
        <FontAwesomeIcon icon={faCirclePlus} />
        Education
      </button>
    </>
  );

  return (
    <div className='education details'>
      <h2 className='section-heading'>Education</h2>
      {activeDetail ? form : detailList}
    </div>
  );
}

export type { EducationProps };
export default Education;
