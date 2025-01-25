import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';

type DescriptiveDetails = ExperienceDetails | ProjectDetails;

function PreviewItemDescription({ details }: { details: DescriptiveDetails }) {
  return (
    <ul className='description'>
      {details.description
        .trim()
        .split('\n')
        .map((item, idx) => (
          <li key={item + idx}>{item}</li>
        ))}
    </ul>
  );
}

export default PreviewItemDescription;
