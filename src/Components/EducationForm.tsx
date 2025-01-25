import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import Input from './Input';
import { UUIDString } from '../lib/uniqueId';
import TextArea from './TextArea';
import { formatDate, parseDate } from '../lib/dateUtils';

interface EducationDetails {
  id: UUIDString;
  collegeName: string;
  degree: string;
  gpa: string;
  coursework: string;
  isVisible: boolean;
  startDate: string;
  endDate: string;
}

interface EducationFormProps {
  id: string;
  educationDetails: EducationDetails[];
  setEducationDetails: Dispatch<SetStateAction<EducationDetails[]>>;
  setActiveId: Dispatch<SetStateAction<UUIDString | null>>;
}

function EducationForm({
  id,
  educationDetails,
  setEducationDetails,
  setActiveId,
}: EducationFormProps) {
  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = field.includes('Date') ? parseDate(e.target.value) : e.target.value;
    const originalDetails = educationDetails.at(detailIndex)!;
    const newDetails = { ...originalDetails, [field]: value };

    const newEducationDetails = educationDetails.map((details) => {
      if (details.id === id) return newDetails;
      return details;
    });
    setEducationDetails(newEducationDetails);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    setActiveId(null);
    const formData = new FormData(e.target);
    console.log(formData);
  }

  const detailIndex = educationDetails.findIndex((detail) => detail.id === id);

  const { collegeName, degree, gpa, coursework, startDate, endDate } =
    educationDetails.at(detailIndex)!;
  
  return (
    <form className='education-form' onSubmit={handleSubmit}>
      <Input
        label='College Name'
        name='collegeName'
        value={collegeName}
        placeholder='e.g. MIT'
        onChange={handleFieldChange}
      />

      <Input
        label='Degree'
        name='degree'
        value={degree}
        placeholder='e.g. M.Sc'
        onChange={handleFieldChange}
      />

      <Input
        label='GPA'
        name='gpa'
        value={gpa}
        placeholder='e.g. 4.20'
        onChange={handleFieldChange}
      />

      <TextArea
        label='Coursework'
        name='coursework'
        value={coursework}
        placeholder='e.g. Data Structures, Object Oriented Programming'
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
        label='End Date'
        type='Date'
        name='endDate'
        placeholder='e.g. yyyy-mm-dd'
        value={formatDate(endDate)}
        onChange={handleFieldChange}
      />

      <button className='btn-save' type='submit'>
        Save
      </button>
    </form>
  );
}

export type { EducationDetails };
export default EducationForm;
