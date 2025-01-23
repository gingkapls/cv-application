import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { DateString, UUIDString } from '../lib/types';
import generateUniqueId from '../lib/uniqueId';
import Input from './Input';
import TextArea from './TextArea';

class ProjectDetails {
  id: UUIDString;
  name: string;
  techUsed: string;
  description: string;
  hidden: boolean;
  #startDate: Date = new Date();
  #endDate: Date = new Date();
  [key: string]: string | boolean | string[] | (() => ProjectDetails);

  constructor({
    id = generateUniqueId(),
    name = '',
    techUsed = '',
    description = '',
    startDate = new Date(),
    endDate = new Date(),
    hidden = false,
  } = {}) {
    this.id = id;
    this.name = name;
    this.techUsed = techUsed;
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
    const start = `${ProjectDetails.shortenDate(this.#startDate)}`;
    const endMonth = this.#endDate.getMonth();
    const endYear = this.#endDate.getFullYear();

    const presentDate = new Date();
    const thisMonth = presentDate.getMonth();
    const thisYear = presentDate.getFullYear();

    const end =
      endMonth === thisMonth && endYear === thisYear
        ? 'Present'
        : `${ProjectDetails.shortenDate(this.#endDate)}`;

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

  clone(): ProjectDetails {
    return new ProjectDetails({
      id: this.id,
      name: this.name,
      techUsed: this.techUsed,
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
    return new Date(dateString);
  }
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
    const value = e.target.value;
    const originalDetails = projectDetails.at(detailIndex)!;
    const newDetails = originalDetails.clone();
    newDetails[field] = value;

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
        onChange={handleFieldChange}
      />

      <Input
        label='Technologies Used'
        name='techUsed'
        value={techUsed}
        onChange={handleFieldChange}
      />

      <TextArea
        label='Description'
        name='description'
        value={description}
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

export { ProjectDetails };
export default ProjectForm;
