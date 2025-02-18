import { anonymizeDetails } from '../lib/anonymizeDetails';
import { getDuration } from '../lib/dateUtils';
import { ExperienceDetails } from './ExperienceForm';
import PreviewItemDescription from './PreviewItemDescription';

function EducationPreviewItem({
  experienceDetails,
  isAnonymized,
}: {
  experienceDetails: ExperienceDetails;
  isAnonymized: boolean;
}) {
  const { orgName, jobTitle, description, location } = anonymizeDetails(
    experienceDetails,
    isAnonymized
  );
  const duration = getDuration(
    experienceDetails.startDate,
    experienceDetails.endDate
  );

  return (
    <section className='preview-item'>
      <h3 className='job-title subheading'>{jobTitle}</h3>
      <span className='duration'>{duration}</span>
      <h4 className='org-name'>{orgName}</h4>
      <span className='location'>{location}</span>
      {description.length !== 0 && (
        <PreviewItemDescription details={experienceDetails} />
      )}
    </section>
  );
}

function ExperiencePreview({
  experienceDetails,
  isAnonymized,
}: {
  experienceDetails: ExperienceDetails[];
  isAnonymized: boolean;
}) {
  const itemList = experienceDetails.map((details) => (
    <EducationPreviewItem
      key={details.id}
      experienceDetails={details}
      isAnonymized={isAnonymized}
    />
  ));

  return (
    <div className='experience-preview detail-preview'>
      <h2 className='section-heading'>Experience</h2>
      {itemList}
    </div>
  );
}

export default ExperiencePreview;
