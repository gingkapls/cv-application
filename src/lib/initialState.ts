import { ContactDetails } from '../Components/ContactForm';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';
import { ProjectDetails } from '../Components/ProjectForm';

const initialContactDetails = {
  fullName: '',
  phoneNumber: '',
  github: '',
  linkedIn: '',
  gmail: '',
} satisfies ContactDetails;

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

export {
  initialContactDetails,
  initialEducationDetails,
  initialExperienceDetails,
  initialProjectDetails,
};
