import { Dispatch, SetStateAction, useState } from 'react';
import ProjectForm, { ProjectDetails } from './ProjectForm';
import { UUIDString } from '../lib/types';
import DetailItem from './DetailItem';

interface ProjectProps {
  projectDetails: ProjectDetails[];
  setProjectDetails: Dispatch<SetStateAction<ProjectDetails[]>>;
}

function Project({
  projectDetails,
  setProjectDetails,
}: ProjectProps) {
  const [activeId, setActiveId] = useState<UUIDString | null>(null);
  const activeDetail =
    activeId && projectDetails.find((detail) => detail.id === activeId);

  return (
    <div className='experience'>
      <h3>Projects</h3>
      <button
        onClick={() => {
          const newDetails = new ProjectDetails();
          setProjectDetails(projectDetails.concat(newDetails));
          setActiveId(newDetails.id);
        }}
      >
        Add new project
      </button>

      {activeDetail === null || activeDetail === undefined ? (
        projectDetails.map((detail) => (
          <DetailItem
            key={detail.id}
            id={detail.id}
            title={detail.name}
            setActiveId={setActiveId}
          />
        ))
      ) : (
        <ProjectForm
          key={activeDetail.id}
          id={activeDetail.id}
          projectDetails={projectDetails}
          setProjectDetails={setProjectDetails}
          setActiveId={setActiveId}
        />
      )}
    </div>
  );
}

export default Project;
