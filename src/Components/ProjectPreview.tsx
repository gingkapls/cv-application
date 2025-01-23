import { ProjectDetails } from './ProjectForm';

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
        <h3 className='name'>{name}</h3> | 
        <span className='tech-used'>{techUsed}</span>
      </div>
      <span className='duration'>
        {startDate} - {endDate}
      </span>
      <span className='description'>
        {description.split('\n').map((item) => (
          <li key={item}>{item}</li>
        ))}
      </span>
    </section>
  );
}

function ProjectPreview({
  projectDetails,
}: {
  projectDetails: ProjectDetails[];
}) {
  return (
    <div className='project-preview detail-preview'>
      <h2>Projects</h2>
      {projectDetails.map((details) => (
        details.hidden || <ProjectPreviewItem key={details.id} projectDetails={details} />
      ))}
    </div>
  );
}

export default ProjectPreview;
