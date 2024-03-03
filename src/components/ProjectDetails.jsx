import React from 'react';
import { Projects } from '../project';

const ProjectDetails = ({id}) => {
  const project = Projects.filter(x=> x.id == id)[0];
 return ( 
  <React.Fragment>
   <div className="project-details">
      <h2 className="project-name">{project.name}</h2>
     { project.videoUrl && <div className="video-container">
      <video controls width="100%">
      <source src="/video-example.webm" type="video/webm" />
      <source src={`${project.videoUrl}`}type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
      </div> }
      <p className="project-description">{project.description}</p>
      {project?.tasks.length > 0 && <div className="tasks">
        <h3>Tasks:</h3>
        <ul className='task-list'>
          {project.tasks.map((task, taskIndex) => (
            <li key={taskIndex}>{task}</li>
          ))}
        </ul>
      </div>}
      { project.link &&
      <button className="duration-200 hover:scale-105" onClick={() => window.open(project.link, '_blank')}>
                  Visit {project.name}
                </button>}
    </div>
    </React.Fragment>
  )
};

export default ProjectDetails;