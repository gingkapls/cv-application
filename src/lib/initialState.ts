import { ContactDetails } from '../Components/ContactForm';
import { EducationDetails } from '../Components/EducationForm';
import { ExperienceDetails } from '../Components/ExperienceForm';

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

export { initialContactDetails, initialEducationDetails, initialExperienceDetails };
