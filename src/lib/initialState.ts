import { ContactDetails } from '../Components/ContactForm';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';
import { ProjectDetails } from '../Components/ProjectForm';
import { SkillsDetails } from '../Components/SkillsForm';
import generateUniqueId from './uniqueId';

const initialContactDetails = {
  fullName: 'John Doe',
  phoneNumber: '123-456-7890',
  github: 'johnDoe',
  linkedIn: 'johnDoe',
  gmail: 'johnDoe@gmail.com',
} satisfies ContactDetails;

const initialEducationDetails = [
  {
    id: generateUniqueId(),
    collegeName: 'College McCollegePants',
    degree: 'McMasters',
    gpa: '4.20',
    coursework: 'Stuff',
    isVisible: true,
    startDate: new Date(),
    endDate: new Date(),
  },
] satisfies EducationDetails[];

const initialExperienceDetails = [
  {
    id: generateUniqueId(),
    orgName: 'Rubocop',
    jobTitle: 'Cop',
    description: 'Cop for rubies',
    location: 'New York',
    startDate: new Date(),
    endDate: new Date(),
    isVisible: true,
  },
] satisfies ExperienceDetails[];

const initialProjectDetails = [
  {
    id: generateUniqueId(),
    name: 'First Project',
    techUsed: 'Javascript',
    description: 'Very cool!',
    startDate: new Date(),
    endDate: new Date(),
    isVisible: true,
  },
] satisfies ProjectDetails[];

const initialSkillsDetails = new SkillsDetails({
  languages: 'Javascript',
  frameworks: 'ReactJS',
  devTools: 'Git, VS Code',
  libraries: 'Jest',
});

export {
  initialContactDetails,
  initialEducationDetails,
  initialExperienceDetails,
  initialProjectDetails,
  initialSkillsDetails,
};
