import { Dispatch, SetStateAction } from 'react';
import { ContactDetails } from './ContactForm';
import { ExperienceDetails } from './ExperienceForm';
import { EducationDetails } from './EducationForm';
import { ProjectDetails } from './ProjectForm';
import { SkillsDetails } from './SkillsForm';
import {
  initialContactDetails,
  initialEducationDetails,
  initialExperienceDetails,
  initialProjectDetails,
  initialSkillsDetails,
} from '../lib/initialState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface ResetCVButtonProps {
  setContactDetails: Dispatch<SetStateAction<ContactDetails>>;
  setExperienceDetails: Dispatch<SetStateAction<ExperienceDetails[]>>;
  setEducationDetails: Dispatch<SetStateAction<EducationDetails[]>>;
  setProjectDetails: Dispatch<SetStateAction<ProjectDetails[]>>;
  setSkillsDetails: Dispatch<SetStateAction<SkillsDetails>>;
}

function ResetCVButton({
  setContactDetails,
  setExperienceDetails,
  setEducationDetails,
  setProjectDetails,
  setSkillsDetails,
}: ResetCVButtonProps) {
  function handleClick() {
    setContactDetails(initialContactDetails);
    setExperienceDetails(initialExperienceDetails);
    setEducationDetails(initialEducationDetails);
    setProjectDetails(initialProjectDetails);
    setSkillsDetails(initialSkillsDetails);
  }

  return (
    <button
      className='btn-reset btn'
      onClick={handleClick}
      aria-label='Reset CV'
      title='Reset CV'
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default ResetCVButton;
