import { anonymizeDetails } from '../lib/anonymizeDetails';
import { getDuration } from '../lib/dateUtils';
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
  isAnonymized,
}: {
  educationDetails: EducationDetails;
  isAnonymized: boolean;
}) {
  const { collegeName, degree, gpa } = anonymizeDetails(
    educationDetails,
    isAnonymized
  );

  const [startDate, endDate] = getDuration(
    educationDetails.startDate,
    educationDetails.endDate
  );

  return (
    <section className='preview-item'>
      <h3 className='college-name'>{collegeName}</h3>
      <span className='duration'>
        {startDate} - {endDate}
      </span>
      <h4 className='degree'>{degree}</h4>
      <span className='gpa'>GPA: {gpa}</span>
    </section>
  );
}

function EducationPreview({
  educationDetails,
  isAnonymized = true,
}: {
  educationDetails: EducationDetails[];
  isAnonymized: boolean;
}) {
  const itemList = educationDetails.map((details) => (
    <EducationPreviewItem
      key={details.id}
      educationDetails={details}
      isAnonymized={isAnonymized}
    />
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
