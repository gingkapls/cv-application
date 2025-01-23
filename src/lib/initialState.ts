import { ContactDetails } from '../Components/ContactForm';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';
import { ProjectDetails } from '../Components/ProjectForm';
import { SkillsDetails } from '../Components/SkillsForm';

const initialContactDetails = new ContactDetails({
  fullName: 'John Doe',
  phoneNumber: '123-456-7890',
  github: 'johnDoe',
  linkedIn: 'johnDoe',
  gmail: 'johnDoe@gmail.com',
});

const initialEducationDetails = [
  new EducationDetails({
    collegeName: 'College McCollegePants',
    degree: 'McMasters',
    gpa: '4.20',
  }),
];

const initialExperienceDetails = [
  new ExperienceDetails({
    orgName: 'Rubocop',
    jobTitle: 'Cop',
    description: 'Cop for rubies',
    location: 'New York',
  }),
];

const initialProjectDetails = [
  new ProjectDetails({
    name: 'First Project',
    techUsed: 'Javascript',
    description: 'Very cool!',
  }),
];

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
