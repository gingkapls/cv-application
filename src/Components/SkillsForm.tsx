import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from './Input';

class SkillsDetails {
  languages: string;
  frameworks: string;
  devTools: string;
  libraries: string;

  constructor({
    languages = '',
    frameworks = '',
    devTools = '',
    libraries = '',
  } = {}) {
    this.languages = languages;
    this.frameworks = frameworks;
    this.devTools = devTools;
    this.libraries = libraries;
  }
}

interface SkillsFormProps {
  skillsDetails: SkillsDetails;
  setSkillsDetails: Dispatch<SetStateAction<SkillsDetails>>;
}

function SkillsForm({ skillsDetails, setSkillsDetails }: SkillsFormProps) {
  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...skillsDetails, [field]: value };
    setSkillsDetails(newDetails);
  }

  const { languages, frameworks, devTools, libraries } = skillsDetails;
  return (
    <form className='skills-details'>
      <h3>Technical Skills</h3>
      <Input
        label='Languages'
        name='languages'
        value={languages}
        onChange={handleFieldChange}
      />
      <Input
        label='Frameworks'
        name='Frameworks'
        value={frameworks}
        onChange={handleFieldChange}
      />
      <Input
        label='Developer Tools'
        name='devTools'
        value={devTools}
        onChange={handleFieldChange}
      />
      <Input
        label='Libraries'
        name='libraries'
        value={libraries}
        onChange={handleFieldChange}
      />
    </form>
  );
}

export type { SkillsFormProps };
export { SkillsDetails };
export default SkillsForm;
