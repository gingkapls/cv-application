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

    setProjectDetails([newDetails, ...projectDetails]);
    setActiveId(newDetails.id);
  }

  const form = activeDetail && (
    <ProjectForm
      key={activeDetail.id}
      id={activeDetail.id}
      projectDetails={projectDetails}
      setProjectDetails={setProjectDetails}
      setActiveId={setActiveId}
    />
  );

  const detailList = (
    <>
      {projectDetails.map((detail, index) => (
        <DetailItem
          key={detail.id}
          id={detail.id}
          title={detail.name || `Project ${index + 1}`}
          isVisible={detail.isVisible}
          setActiveId={setActiveId}
          details={projectDetails}
          setDetails={setProjectDetails}
        />
      ))}
      <button key='btnAdd' className='btn-add btn' onClick={handleClick}>
        <FontAwesomeIcon icon={faCirclePlus} className='fa-xl' />
        Project
      </button>
    </>
  );

  return (
    <div className='project details'>
      <h2 className='section-heading'>Projects</h2>
      {activeDetail ? form : detailList}
    </div>
  );
}

export type { ProjectProps };
export default Project;
