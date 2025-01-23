import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import { DateString, UUIDString } from '../lib/types';
import generateUniqueId from '../lib/uniqueId';

class ExperienceDetails {
  id: UUIDString;
  orgName: string;
  jobTitle: string;
  location: string;
  description: string;
  hidden: boolean;
  #startDate: Date = new Date();
  #endDate: Date = new Date();
  [key: string]: string | boolean | string[] | (() => ExperienceDetails);

  constructor({
    id = generateUniqueId(),
    orgName = '',
    jobTitle = '',
    location = '',
    description = '',
    startDate = new Date(),
    endDate = new Date(),
    hidden = false,
  } = {}) {
    this.id = id;
    this.orgName = orgName;
    this.jobTitle = jobTitle;
    this.location = location;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hidden = hidden;
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

  get duration() {
    const start = `${ExperienceDetails.shortenDate(this.#startDate)}`;
    const endMonth = this.#endDate.getMonth();
    const endYear = this.#endDate.getFullYear();

    const presentDate = new Date();
    const thisMonth = presentDate.getMonth();
    const thisYear = presentDate.getFullYear();

    const end =
      endMonth === thisMonth && endYear === thisYear
        ? 'Present'
        : `${ExperienceDetails.shortenDate(this.#endDate)}`;

    return [start, end];
  }

  static shortenDate(date: Date) {
    const userLocale = navigator.languages[0];
    const formatter = new Intl.DateTimeFormat(userLocale, {
      month: 'short',
      year: 'numeric',
    });

    const [month, year] = formatter.format(date).split(' ');
    return `${month}. ${year}`;
  }

  clone(): ExperienceDetails {
    return new ExperienceDetails({
      id: this.id,
      orgName: this.orgName,
      jobTitle: this.jobTitle,
      location: this.location,
      description: this.description,
      hidden: this.hidden,
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
    return dateString.length === 0 ? new Date() : new Date(dateString);
  }
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
  const detailIndex = experienceDetails.findIndex(
    (detail: ExperienceDetails) => detail.id === id
  );

  const { orgName, jobTitle, location, description, startDate, endDate } =
    experienceDetails.at(detailIndex)!;

  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;
    const originalDetails = experienceDetails.at(detailIndex)!;
    const newDetails = originalDetails.clone();
    newDetails[field] = value;

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
      <button className='btn-save' type='submit'>
        Save
      </button>
    </form>
  );
}

export { ExperienceDetails };
export default ExperienceForm;
