import { ExperienceDetails } from './ExperienceForm';
import { ProjectDetails } from './ProjectForm';

type DescriptiveDetails = ExperienceDetails | ProjectDetails;

function PreviewItemDescription({ details }: { details: DescriptiveDetails }) {
  // Trim the whitespace from both ends
  // If the a line is empty (blank line) don't include it
  return (
    <ul className='description'>
      {details.description
        .trim()
        .split('\n')
        .flatMap((item, idx) => (
          item.length !== 0 ? <li key={item + idx}>{item}</li> : []
        ))}
    </ul>
  );
}

export default PreviewItemDescription;
