import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from './Input';

interface SkillsDetails {
  languages: string;
  frameworks: string;
  devTools: string;
  libraries: string;
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
    <form className='skills-details details'>
      <h3>Technical Skills</h3>
      <Input
        label='Languages'
        name='languages'
        placeholder='e.g. HTML5, CSS, Javascript'
        value={languages}
        onChange={handleFieldChange}
      />

      <Input
        label='Frameworks'
        name='frameworks'
        placeholder='e.g. Angular, Svelte, Node.js'
        value={frameworks}
        onChange={handleFieldChange}
      />

      <Input
        label='Developer Tools'
        name='devTools'
        placeholder='e.g. VS Code, Webpack, Git, Linux'
        value={devTools}
        onChange={handleFieldChange}
      />

      <Input
        label='Libraries'
        name='libraries'
        placeholder='e.g. ReactJS, Jest'
        value={libraries}
        onChange={handleFieldChange}
      />
    </form>
  );
}

export type { SkillsDetails, SkillsFormProps };
export default SkillsForm;
