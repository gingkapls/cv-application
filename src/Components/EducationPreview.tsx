import { EducationDetails } from './EducationForm';

function EducationPreviewItem({
  educationDetails,
}: {
  educationDetails: EducationDetails;
}) {
  const { collegeName, degree, gpa } = educationDetails;
  const [startDate, endDate] = educationDetails.duration;

  return (
    <section className='preview-item'>
      <h3 className='college-name'>{collegeName}</h3>
      <span className='duration'>
        {startDate} - {endDate}
      </span>
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
    <div className='education-preview detail-preview'>
      <h2>Education</h2>
      {educationDetails.map(
        (details) =>
          details.hidden || (
            <EducationPreviewItem key={details.id} educationDetails={details} />
          )
      )}
    </div>
  );
}

export default EducationPreview;
