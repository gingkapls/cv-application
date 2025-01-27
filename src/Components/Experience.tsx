import { Dispatch, SetStateAction, useState } from 'react';
import ExperienceForm, { ExperienceDetails } from './ExperienceForm';
import DetailItem from './DetailItem';
import generateUniqueId, { UUIDString } from '../lib/uniqueId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface ExperienceProps {
  experienceDetails: ExperienceDetails[];
  setExperienceDetails: Dispatch<SetStateAction<ExperienceDetails[]>>;
}

function Experience({
  experienceDetails,
  setExperienceDetails,
}: ExperienceProps) {
  const [activeId, setActiveId] = useState<UUIDString | null>(null);
  const activeDetail =
    activeId && experienceDetails.find((detail) => detail.id === activeId);

  function handleClick() {
    const newDetails = {
      id: generateUniqueId(),
      orgName: '',
      jobTitle: '',
      location: '',
      description: '',
      startDate: new Date().toJSON(),
      endDate: new Date().toJSON(),
      isVisible: true,
    } satisfies ExperienceDetails;

    setExperienceDetails([newDetails, ...experienceDetails]);
    setActiveId(newDetails.id);
  }

  function toggleHide(id: UUIDString) {
    const oldDetails = experienceDetails.find((detail) => detail.id === id)!;
    const newDetails = { ...oldDetails, isVisible: !oldDetails.isVisible };

    setExperienceDetails(
      experienceDetails.map((detail) => {
        if (detail.id === oldDetails.id) return newDetails;
        return detail;
      })
    );
  }

  return (
    <div className='experience details'>
      <h2 className='section-heading'>Experience</h2>
      {activeDetail === null || activeDetail === undefined ? (
        experienceDetails
          .map((detail, index) => (
            <DetailItem
              key={detail.id}
              id={detail.id}
              isVisible={detail.isVisible}
              title={detail.orgName || `Organization ${index + 1}`}
              setActiveId={setActiveId}
              toggleHide={toggleHide}
            />
          ))
          .concat(
            <button key='btnAdd' className='btn-add btn' onClick={handleClick}>
              <FontAwesomeIcon icon={faCirclePlus} />
              Experience
            </button>
          )
      ) : (
        <ExperienceForm
          key={activeDetail.id}
          id={activeDetail.id}
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
          setActiveId={setActiveId}
        />
      )}
    </div>
  );
}

export type { ExperienceProps };
export default Experience;
