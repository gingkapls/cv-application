import { ContactDetails } from '../Components/ContactForm';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';
import { ProjectDetails } from '../Components/ProjectForm';
import { SkillsDetails } from '../Components/SkillsForm';
import { initialContactDetails } from './initialState';

type detailType =
  | ContactDetails
  | EducationDetails
  | ExperienceDetails
  | ProjectDetails
  | SkillsDetails;

function anonymizeDetails<T extends detailType>(
  details: T,
  isAnonymized: boolean
): T {
  if (!isAnonymized) return details;

  if (Object.hasOwn(details, 'fullName')) return initialContactDetails as T;

  if (Object.hasOwn(details, 'collegeName'))
    return { ...details, collegeName: 'College Name' } as T;

  if (Object.hasOwn(details, 'orgName'))
    return {
      ...details,
      orgName: 'Organization',
      location: 'AnyTown, AnyState',
    } as T;

  return details;
}

export { anonymizeDetails };
