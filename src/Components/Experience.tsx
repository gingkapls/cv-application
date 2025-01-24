import { Dispatch, SetStateAction, useState } from 'react';
import ExperienceForm, { ExperienceDetails } from './ExperienceForm';
import { UUIDString } from '../lib/types';
import DetailItem from './DetailItem';

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
    const newDetails = new ExperienceDetails();
    setExperienceDetails(experienceDetails.concat(newDetails));
    setActiveId(newDetails.id);
  }

  function toggleHide(id: UUIDString) {
    const oldDetails = experienceDetails.find((detail) => detail.id === id)!;
    const newDetails = oldDetails.clone();
    newDetails.isVisible = !newDetails.isVisible;

    setExperienceDetails(
      experienceDetails.map((detail) => {
        if (detail.id === oldDetails.id) return newDetails;
        return detail;
      })
    );
  }

  return (
    <div className='experience details'>
      <h3>Experience</h3>
      {activeDetail === null || activeDetail === undefined ? (
        experienceDetails
          .map((detail) => (
            <DetailItem
              key={detail.id}
              id={detail.id}
              isVisible={detail.isVisible}
              title={detail.orgName}
              setActiveId={setActiveId}
              toggleHide={toggleHide}
            />
          ))
          .concat(
            <button key='btnAdd' className='btn-add' onClick={handleClick}>
              + Experience
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
