import { Dispatch, SetStateAction } from 'react';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';
import { ProjectDetails } from '../Components/ProjectForm';
import { UUIDString } from './uniqueId';

type EnumerableDetails = EducationDetails | ExperienceDetails | ProjectDetails;

function toggleHide<T extends EnumerableDetails>(
  id: UUIDString,
  details: T[],
  setDetails: Dispatch<SetStateAction<T[]>>
) {
  const oldDetails = details.find((detail) => detail.id === id)!;
  const newDetails = { ...oldDetails, isVisible: !oldDetails.isVisible };

  setDetails(
    details.map((detail) => {
      if (detail.id === oldDetails.id) return newDetails;
      return detail;
    })
  );
}

export default toggleHide;
