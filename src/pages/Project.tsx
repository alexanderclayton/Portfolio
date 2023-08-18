//import//
import { useParams } from "react-router-dom";
import { ProjectCards } from "../data/ProjectData";

export const Project: React.FC = () => {
  const { id } = useParams();
  if (!id) {
    return <div>Loading...</div>;
  } else {
    const projectId = parseInt(id);
    const project = ProjectCards[projectId];

    return (
      <div className="">
        <h2> {project.name} </h2>
        <img src={project.image} alt={project.alt} />
        <p> {project.description} </p>
        <p>
          <strong>Skills:</strong> {project.skills}
        </p>
        <a href={project.link}>Link to the project</a>
        <a href={project.github}>Link to the GitHub codebase</a>
      </div>
    );
  }
};
