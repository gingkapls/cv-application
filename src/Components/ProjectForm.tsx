import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { UUIDString } from '../lib/uniqueId';
import Input from './Input';
import TextArea from './TextArea';
import FormActions from './FormActions';

interface ProjectDetails {
  id: UUIDString;
  name: string;
  techUsed: string;
  description: string;
  isVisible: boolean;
  link: string;
  [key: string]: string | boolean;
}

interface ProjectFormProps {
  id: string;
  projectDetails: ProjectDetails[];
  setProjectDetails: Dispatch<SetStateAction<ProjectDetails[]>>;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
}

function ProjectForm({
  id,
  projectDetails,
  setProjectDetails,
  setActiveId,
}: ProjectFormProps) {
  const detailIndex = projectDetails.findIndex(
    (detail: ProjectDetails) => detail.id === id
  );

  const { name, techUsed, description, link } = projectDetails.at(detailIndex)!;

  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value.trimStart();
    const originalDetails = projectDetails.at(detailIndex)!;
    const newDetails = { ...originalDetails, [field]: value };

    const newProjectDetails = projectDetails.map((details) => {
      if (details.id === id) return newDetails;
      return details;
    });

    setProjectDetails(newProjectDetails);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setActiveId(null);
  }

  function handleDelete() {
    setProjectDetails(projectDetails.filter((details) => details.id !== id));
  }

  return (
    <form className='project-form' onSubmit={handleSubmit}>
      <Input
        label='Project Name'
        name='name'
        required={true}
        value={name}
        placeholder='e.g. CV-Application'
        onChange={handleFieldChange}
      />

      <Input
        label='Technologies Used'
        name='techUsed'
        value={techUsed}
        placeholder='e.g. ReactJS, CSS'
        onChange={handleFieldChange}
      />

      <TextArea
        label='Description'
        name='description'
        hint='Split by new lines'
        value={description}
        placeholder='e.g. Developed a responsive frontend web application'
        onChange={handleFieldChange}
      />

      <Input
        label='Project Link'
        name='link'
        value={link}
        placeholder='e.g. https://github.com/username/project'
        onChange={handleFieldChange}
      />

      <FormActions handleDelete={handleDelete} />
    </form>
  );
}

export type { ProjectDetails };
export default ProjectForm;
