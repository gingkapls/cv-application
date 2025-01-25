import { Dispatch, SetStateAction, useState } from 'react';
import ProjectForm, { ProjectDetails } from './ProjectForm';
import DetailItem from './DetailItem';
import generateUniqueId, { UUIDString } from '../lib/uniqueId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface ProjectProps {
  projectDetails: ProjectDetails[];
  setProjectDetails: Dispatch<SetStateAction<ProjectDetails[]>>;
}

function Project({ projectDetails, setProjectDetails }: ProjectProps) {
  const [activeId, setActiveId] = useState<UUIDString | null>(null);
  const activeDetail =
    activeId && projectDetails.find((detail) => detail.id === activeId);

  function handleClick() {
    const newDetails = {
      id: generateUniqueId(),
      name: '',
      techUsed: '',
      description: '',
      startDate: new Date().toJSON(),
      endDate: new Date().toJSON(),
      isVisible: true,
    } satisfies ProjectDetails;
    setProjectDetails(projectDetails.concat(newDetails));
    setActiveId(newDetails.id);
  }

  function toggleHide(id: UUIDString) {
    const oldDetails = projectDetails.find((detail) => detail.id === id)!;
    const newDetails = { ...oldDetails, isVisible: !oldDetails.isVisible };

    setProjectDetails(
      projectDetails.map((detail) => {
        if (detail.id === oldDetails.id) return newDetails;
        return detail;
      })
    );
  }

  return (
    <div className='project details'>
      <h3>Projects</h3>

      {activeDetail === null || activeDetail === undefined ? (
        projectDetails
          .map((detail) => (
            <DetailItem
              key={detail.id}
              id={detail.id}
              title={detail.name}
              isVisible={detail.isVisible}
              setActiveId={setActiveId}
              toggleHide={toggleHide}
            />
          ))
          .concat(
            <button key='btnAdd' className='btn-add btn' onClick={handleClick}>
              <FontAwesomeIcon icon={faCirclePlus} />
              Project
            </button>
          )
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

export type { ProjectProps };
export default Project;
