import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import { UUIDString } from '../lib/uniqueId';
import { formatDate, parseDate } from '../lib/dateUtils';

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
    const value = field.includes('Date') ? parseDate(e.target.value) : e.target.value;
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
    if (!(e.target instanceof HTMLFormElement)) return;

    setActiveId(null);

    const formData = new FormData(e.target);
    console.log(formData);
  }
  return (
    <form className='experience-form' onSubmit={handleSubmit}>
      <Input
        label='Organization Name'
        name='orgName'
        value={orgName}
        onChange={handleFieldChange}
      />

      <Input
        label='Job Title'
        name='jobTitle'
        value={jobTitle}
        onChange={handleFieldChange}
      />

      <TextArea
        label='Job Description'
        name='description'
        value={description}
        onChange={handleFieldChange}
      />

      <Input
        label='Location'
        name='location'
        value={location}
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

export type { ExperienceDetails };
export default ExperienceForm;
