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
  return (
    <div className='preview-container'>
      <section className='preview'>{children}</section>
    </div>
  );
}

export default Preview;
