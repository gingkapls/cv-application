import { ProjectDetails } from './ProjectForm';

function ProjectPreviewItemDescription({
  projectDetails,
}: {
  projectDetails: ProjectDetails;
}) {
  return (
    <span className='description'>
      {projectDetails.description
        .trim()
        .split('\n')
        .map((item, idx) => (
          <li key={item + idx}>{item}</li>
        ))}
    </span>
  );
}

function ProjectPreviewItem({
  projectDetails,
}: {
  projectDetails: ProjectDetails;
}) {
  const { name, techUsed, description } = projectDetails;
  const [startDate, endDate] = projectDetails.duration;

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
        <ProjectPreviewItemDescription projectDetails={projectDetails} />
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
