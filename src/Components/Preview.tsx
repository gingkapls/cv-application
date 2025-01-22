import { ContactDetails } from './ContactForm';
import { EducationDetails } from './EducationForm';
import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';

type PreviewableType = React.ReactElement<
  ContactDetails | EducationDetails | ExperienceDetails | ProjectDetails
>;

interface PreviewProps {
  children: PreviewableType[] | PreviewableType;
}

function Preview({ children }: PreviewProps) {
  return <section className='preview'>{children}</section>;
}

export default Preview;
