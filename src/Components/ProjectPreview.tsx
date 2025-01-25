import { getDuration } from '../lib/dateUtils';
import PreviewItemDescription from './PreviewItemDescription';
import { ProjectDetails } from './ProjectForm';

function ProjectPreviewItem({
  projectDetails,
}: {
  projectDetails: ProjectDetails;
}) {
  const { name, techUsed, description } = projectDetails;
  const [startDate, endDate] = getDuration(
    projectDetails.startDate,
    projectDetails.endDate
  );

  return (
    <section className='preview-item'>
      <div className='title'>
        <h3 className='name'>{name}</h3>
        {techUsed.length !== 0 && ' |'}
        <span className='tech-used'>{techUsed}</span>
      </div>
      <span className='duration'>
        {startDate} - {endDate}
      </span>
      {description.length !== 0 && (
        <PreviewItemDescription details={projectDetails} />
      )}
    </section>
  );
}

function ProjectPreview({
  projectDetails,
}: {
  projectDetails: ProjectDetails[];
}) {
  const items = projectDetails.map((details) => (
    <ProjectPreviewItem key={details.id} projectDetails={details} />
  ));

  return (
    <div className='project-preview detail-preview'>
      <h2>Projects</h2>
      {items}
    </div>
  );
}

export default ProjectPreview;
