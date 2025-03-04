import { parseLink } from '../lib/parseLink';
import PreviewItemDescription from './PreviewItemDescription';
import { ProjectDetails } from './ProjectForm';

function ProjectPreviewItem({
  projectDetails,
}: {
  projectDetails: ProjectDetails;
}) {
  const { name, techUsed, description, link } = projectDetails;

  return (
    <section className='preview-item'>
      <div className='title'>
        <h3 className='name subheading'>{name}</h3>
        <span className='tech-used'>{techUsed}</span>
      </div>
      <a href={parseLink(link)} target="_blank" rel='noopener noreferrer'>{link}</a>
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
      <h2 className='section-heading'>Projects</h2>
      {items}
    </div>
  );
}

export default ProjectPreview;
