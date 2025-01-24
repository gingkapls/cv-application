import { EducationDetails } from './EducationForm';

function Coursework({
  educationDetails,
}: {
  educationDetails: EducationDetails[];
}) {
  const combinedCoursework = educationDetails
    .map((details) => details.coursework)
    .filter((coursework) => coursework.length)
    .join(', ');

  if (combinedCoursework.length === 0) return null;

  return (
      <section className='coursework'>
        <h3>Coursework</h3>
        <p>{combinedCoursework}</p>
      </section>
  );
}

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
  const itemList = educationDetails.map((details) => (
    <EducationPreviewItem key={details.id} educationDetails={details} />
  ));

  return (
    <div className='education-preview detail-preview'>
      <h2>Education</h2>
      {itemList}
      <Coursework educationDetails={educationDetails} />
    </div>
  );
}

export default EducationPreview;
