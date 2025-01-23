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
}

function CopyTexButton({
  contactDetails,
  educationDetails,
  experienceDetails,
  projectDetails,
  skillsDetails,
}: CopyTexButtonProps) {
  function handleClick() {
    const text = generateTexCode({
      contactDetails,
      educationDetails,
      experienceDetails,
      projectDetails,
      skillsDetails,
    });

    navigator.clipboard.writeText(text);
    console.log('copied');
    console.log(text);
  }
  return (
    <button className='btn-copy-tex' onClick={handleClick}>
      Copy as LaTeX
    </button>
  );
}

export default CopyTexButton;
