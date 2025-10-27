import generateTexCode from '../lib/generateTexCode';
import { ContactDetails } from './ContactForm';
import { EducationDetails } from './EducationForm';
import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';
import { SkillsDetails } from './SkillsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

interface TexActionsProps {
  contactDetails: ContactDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  projectDetails: ProjectDetails[];
  skillsDetails: SkillsDetails;
  isAnonymized: boolean;
}
function TexActions(props: TexActionsProps) {
  const texRef = useRef<null | HTMLInputElement>(null);

  function handleCopy() {
    const text = generateTexCode(props);
    navigator.clipboard.writeText(text);
  }

  function handleSubmit() {
    if (texRef.current === null) {
      return console.error('The LaTeX code did not export properly');
    }

    const texCode = generateTexCode(props);
    texRef.current.value = texCode;
    return true;
  }

  return (
    <div className='tex-actions-container btn-container'>
      <form
        action='https://www.overleaf.com/docs'
        method='POST'
        target='_blank'
        onSubmit={handleSubmit}
      >
        <input ref={texRef} type='hidden' name='snip' />
        <button className='btn-open-overleaf btn' type='submit'>
          Open in Overleaf <FontAwesomeIcon icon={faLeaf} className='fa-xl' />
        </button>
      </form>
      <button className='btn-copy-tex btn' onClick={handleCopy}>
        Copy as LaTeX
      </button>
    </div>
  );
}

export default TexActions;
