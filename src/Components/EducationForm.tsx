import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import Input from './Input';

export interface EducationDetails {
  id: string;
  collegeName: string;
  degree: string;
  gpa: string;
  startDate: Date;
  endDate: Date;
}

interface EducationFormProps {
  id: string;
  educationDetails: EducationDetails[];
  setEducationDetails: Dispatch<SetStateAction<EducationDetails[]>>;
}

function EducationForm({
  id,
  educationDetails,
  setEducationDetails,
}: EducationFormProps) {
  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...educationDetails, [field]: value };
    // setEducationDetails(newDetails);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const { collegeName, degree, gpa, startDate, endDate } =
    educationDetails.find((details) => details.id === id);

  return (
    <form className='education-form' onSubmit={handleSubmit}>
      <Input
        label='College Name'
        name='college-name'
        value={collegeName}
        onChange={handleFieldChange}
      />

      <Input
        label='Degree'
        name='degree'
        value={degree}
        onChange={handleFieldChange}
      />

      <Input
        label='GPA: '
        name='gpa'
        value={gpa}
        onChange={handleFieldChange}
      />
      <Input
        label='Start Date: '
        type='Date'
        name='start-date'
        value={startDate.toString()}
        onChange={handleFieldChange}
      />
      <Input
        label='End Date: '
        type='Date'
        name='end-date'
        value={endDate.toString()}
        onChange={handleFieldChange}
      />
      <button type='submit'>Save</button>
    </form>
  );
}

export default EducationForm;
