import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import Input from './Input';
import { DateString, UUIDString } from '../lib/types';
import generateUniqueId from '../lib/uniqueId';

class EducationDetails {
  id: UUIDString;
  collegeName: string;
  degree: string;
  gpa: string;
  #startDate: Date = new Date();
  #endDate: Date = new Date();
  [key: string]: string | (() => EducationDetails);

  constructor({
    id = generateUniqueId(),
    collegeName = '',
    degree = '',
    gpa = '',
    startDate = new Date(),
    endDate = new Date(),
  } = {}) {
    this.id = id;
    this.collegeName = collegeName;
    this.degree = degree;
    this.gpa = gpa;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  set startDate(date: Date | DateString) {
    this.#startDate = date instanceof Date ? date : this.#parseDate(date);
  }

  get startDate(): DateString {
    return this.#formatDate(this.#startDate);
  }

  set endDate(date: Date | DateString) {
    this.#endDate = date instanceof Date ? date : this.#parseDate(date);
  }

  get endDate(): DateString {
    return this.#formatDate(this.#endDate);
  }

  clone(): EducationDetails {
    return new EducationDetails({
      id: this.id,
      collegeName: this.collegeName,
      degree: this.degree,
      gpa: this.gpa,
      startDate: this.#startDate,
      endDate: this.#endDate,
    });
  }

  #formatDate(date: Date): DateString {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0 indexed month
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  #parseDate(dateString: DateString): Date {
    return new Date(dateString);
  }
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
    const value = e.target.value;
    const originalDetails = educationDetails.at(detailIndex)!;
    const newDetails = originalDetails.clone();
    newDetails[field] = value;

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

  const detailIndex = educationDetails.findIndex(
    (detail: EducationDetails) => detail.id === id
  );

  const { collegeName, degree, gpa, startDate, endDate } =
    educationDetails.at(detailIndex)!;

  return (
    <form className='education-form' onSubmit={handleSubmit}>
      <Input
        label='College Name'
        name='collegeName'
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
        name='startDate'
        value={startDate}
        onChange={handleFieldChange}
      />
      <Input
        label='End Date: '
        type='Date'
        name='endDate'
        value={endDate}
        onChange={handleFieldChange}
      />
      <button type='submit'>Save</button>
    </form>
  );
}

export { EducationDetails };
export default EducationForm;
