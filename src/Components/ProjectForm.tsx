import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { UUIDString } from '../lib/uniqueId';
import Input from './Input';
import TextArea from './TextArea';
import { formatDate, parseDate } from '../lib/dateUtils';

interface ProjectDetails {
  id: UUIDString;
  name: string;
  techUsed: string;
  description: string;
  isVisible: boolean;
  startDate: string;
  endDate: string;
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

  const { name, techUsed, description, startDate, endDate } =
    projectDetails.at(detailIndex)!;

  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = field.includes('Date') ? parseDate(e.target.value) : e.target.value;
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
    if (!(e.target instanceof HTMLFormElement)) return;
    setActiveId(null);

    const formData = new FormData(e.target);
    console.log(formData);
  }
  return (
    <form className='project-form' onSubmit={handleSubmit}>
      <Input
        label='Project Name'
        name='name'
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
        value={description}
        placeholder='e.g. Developed a responsive frontend web application'
        onChange={handleFieldChange}
      />

      <Input
        label='Start Date: '
        type='Date'
        name='startDate'
        value={formatDate(startDate)}
        onChange={handleFieldChange}
      />

      <Input
        label='End Date: '
        type='Date'
        name='endDate'
        value={formatDate(endDate)}
        onChange={handleFieldChange}
      />
      <button className='btn-save' type='submit'>
        Save
      </button>
    </form>
  );
}

export type { ProjectDetails };
export default ProjectForm;
