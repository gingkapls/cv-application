import generateTexCode from '../lib/generateTexCode';
import { ContactDetails } from './ContactForm';
import { EducationDetails } from './EducationForm';
import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';
import { SkillsDetails } from './SkillsForm';

interface CopyTexButtonProps {
  contactDetails: ContactDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  projectDetails: ProjectDetails[];
  skillsDetails: SkillsDetails;
  isAnonymized: boolean;
}

function CopyTexButton({
  contactDetails,
  educationDetails,
  experienceDetails,
  projectDetails,
  skillsDetails,
  isAnonymized,
}: CopyTexButtonProps) {
  function handleClick() {
    const text = generateTexCode({
      contactDetails,
      educationDetails,
      experienceDetails,
      projectDetails,
      skillsDetails,
    }, isAnonymized);

    navigator.clipboard.writeText(text);
    console.log('copied');
    console.log(text);
  }
  return (
    <button className='btn-copy-tex btn' onClick={handleClick}>
      Copy as LaTeX
    </button>
  );
}

export default CopyTexButton;
