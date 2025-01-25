import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import { UUIDString } from '../lib/uniqueId';
import { formatDate, parseDate } from '../lib/dateUtils';
import FormActions from './FormActions';

interface ExperienceDetails {
  id: UUIDString;
  orgName: string;
  jobTitle: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  isVisible: boolean;
}

interface ExperienceFormProps {
  id: string;
  experienceDetails: ExperienceDetails[];
  setExperienceDetails: Dispatch<SetStateAction<ExperienceDetails[]>>;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
}

function ExperienceForm({
  id,
  experienceDetails,
  setExperienceDetails,
  setActiveId,
}: ExperienceFormProps) {
  const detailIndex = experienceDetails.findIndex((detail) => detail.id === id);

  const { orgName, jobTitle, location, description, startDate, endDate } =
    experienceDetails.at(detailIndex)!;

  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = field.includes('Date')
      ? parseDate(e.target.value)
      : e.target.value.trimStart();
    const originalDetails = experienceDetails.at(detailIndex)!;
    const newDetails = { ...originalDetails, [field]: value };

    const newEducationDetails = experienceDetails.map((details) => {
      if (details.id === id) return newDetails;
      return details;
    });

    setExperienceDetails(newEducationDetails);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setActiveId(null);
  }

  function handleDelete() {
    setExperienceDetails(
      experienceDetails.filter((details) => details.id !== id)
    );
  }

  return (
    <form className='experience-form' onSubmit={handleSubmit}>
      <Input
        label='Organization Name'
        name='orgName'
        value={orgName}
        required={true}
        placeholder='e.g. Linux Foundation'
        onChange={handleFieldChange}
      />

      <Input
        label='Job Title'
        name='jobTitle'
        value={jobTitle}
        required={true}
        placeholder='e.g. Chief Technology Officer'
        onChange={handleFieldChange}
      />

      <TextArea
        label='Job Description'
        name='description'
        placeholder='e.g. Developed a full stack web application'
        hint='Split by newlines'
        value={description}
        onChange={handleFieldChange}
      />

      <Input
        label='Location'
        name='location'
        value={location}
        placeholder='e.g. Cambridge, MA'
        onChange={handleFieldChange}
      />

      <Input
        label='Start Date'
        type='Date'
        name='startDate'
        placeholder='e.g. yyyy-mm-dd'
        value={formatDate(startDate)}
        onChange={handleFieldChange}
      />

      <Input
        label='End Date: '
        type='Date'
        name='endDate'
        placeholder='e.g. yyyy-mm-dd'
        value={formatDate(endDate)}
        onChange={handleFieldChange}
      />
      <FormActions handleDelete={handleDelete} />
    </form>
  );
}

export type { ExperienceDetails };
export default ExperienceForm;
