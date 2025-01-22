import { EducationDetails } from './EducationForm';

function EducationPreviewItem({
  educationDetails,
}: {
  educationDetails: EducationDetails;
}) {
  const { collegeName, degree, gpa } = educationDetails;
  const [startDate, endDate] = educationDetails.duration;

  return (
    <section className='education-preview-item'>
      <h3 className='college-name'>{collegeName}</h3>
      <span className='duration'>{startDate} - {endDate}</span>
      <h4 className='degree'>{degree}</h4>
      <span className='gpa'>{gpa}</span>
    </section>
  );
}

function EducationPreview({
  educationDetails,
}: {
  educationDetails: EducationDetails[];
}) {
  return (
    <div className='education-preview'>
      <h2>Education</h2>
      {educationDetails.map((details) => (
        <EducationPreviewItem key={details.id} educationDetails={details} />
      ))}
    </div>
  );
}

export default EducationPreview;
