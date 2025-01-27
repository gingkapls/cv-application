import { Base64 } from 'js-base64';
import generateTexCode from '../lib/generateTexCode';
import { ContactDetails } from './ContactForm';
import { EducationDetails } from './EducationForm';
import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';
import { SkillsDetails } from './SkillsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

interface TexActionsProps {
  contactDetails: ContactDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  projectDetails: ProjectDetails[];
  skillsDetails: SkillsDetails;
  isAnonymized: boolean;
}
function TexActions(props: TexActionsProps) {
  function handleCopy() {
    const text = generateTexCode(props);
    navigator.clipboard.writeText(text);
  }

  function handleOpen() {
    const URL = 'https://www.overleaf.com/docs?snip_uri=';
    const snip_uri = 'data:application/x-tex;base64,';
    const b64Tex = Base64.encode(generateTexCode(props));
    window.open(URL + snip_uri + b64Tex, '_blank');
  }

  return (
    <div className='tex-actions-container btn-container'>
      <button className='btn-open-overleaf btn' onClick={handleOpen}>
        Open in Overleaf <FontAwesomeIcon icon={faLeaf} className='fa-xl' />
      </button>
      <button className='btn-copy-tex btn' onClick={handleCopy}>
        Copy as LaTeX
      </button>
    </div>
  );
}

export default TexActions;
