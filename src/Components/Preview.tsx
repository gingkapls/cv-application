import { ContactDetails } from './ContactForm';
import ContactPreview from './ContactPreview';
import CopyTexButton from './CopyTexButton';
import { EducationDetails } from './EducationForm';
import EducationPreview from './EducationPreview';
import { ExperienceDetails } from './ExperienceForm';
import ExperiencePreview from './ExperiencePreview';
import { ProjectDetails } from './ProjectForm';
import ProjectPreview from './ProjectPreview';
import { SkillsDetails } from './SkillsForm';
import SkillsPreview from './SkillsPreview';

type FilterableDetails = EducationDetails | ExperienceDetails | ProjectDetails;

interface PreviewProps {
  contactDetails: ContactDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  projectDetails: ProjectDetails[];
  skillsDetails: SkillsDetails;
  visibleOnly: boolean;
}

function filterVisibleDetails<T extends FilterableDetails>(details: T[]): T[] {
  return details.filter(detail => detail.isVisible)
}

function Preview({
  contactDetails,
  educationDetails,
  experienceDetails,
  projectDetails,
  skillsDetails,
}: PreviewProps) {
  const visibleEducationDetails = filterVisibleDetails(educationDetails);
  const visibleExperienceDetails = filterVisibleDetails(experienceDetails);
  const visibleProjectDetails = filterVisibleDetails(projectDetails);
  
  return (
    <div className='preview-container'>
      <section className='preview'>
        <ContactPreview contactDetails={contactDetails} />
        <ExperiencePreview experienceDetails={visibleExperienceDetails} />
        <EducationPreview educationDetails={visibleEducationDetails} />
        <ProjectPreview projectDetails={visibleProjectDetails} />
        <SkillsPreview skillsDetails={skillsDetails} />
        <CopyTexButton
          contactDetails={contactDetails}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
          projectDetails={projectDetails}
          skillsDetails={skillsDetails}
        />
      </section>
    </div>
  );
}

export default Preview;
