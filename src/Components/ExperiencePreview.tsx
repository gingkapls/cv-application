import { ExperienceDetails } from './ExperienceForm';

function EducationPreviewItem({
  experienceDetails,
}: {
  experienceDetails: ExperienceDetails;
}) {
  const { orgName, jobTitle, description, location } = experienceDetails;
  const [startDate, endDate] = experienceDetails.duration;

  return (
    <section className='preview-item'>
      <h3 className='job-title'>{jobTitle}</h3>
      <span className='duration'>
        {startDate} - {endDate}
      </span>
      <h4 className='org-name'>{orgName}</h4>
      <span className='location'>{location}</span>
      <ul className='job-description'>
        {description.split('\n').map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  );
}

function ExperiencePreview({
  experienceDetails,
}: {
  experienceDetails: ExperienceDetails[];
}) {
  return (
    <div className='experience-preview detail-preview'>
      <h2>Experience</h2>
      {experienceDetails.map((details) => (
        details.hidden || <EducationPreviewItem key={details.id} experienceDetails={details} />
      ))}
    </div>
  );
}

export default ExperiencePreview;
