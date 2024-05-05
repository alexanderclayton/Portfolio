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
      <div className="flex flex-col w-full px-12 justify-center items-center pt-12 pb-8 font-Quicksand">
        <h2 className="text-4xl text-text"> {project.name} </h2>
        <img
          src={project.image}
          alt={project.alt}
          className="md:w-[70%] w-full md:h-[500px] h-[250px] object-cover mt-4 rounded-xl"
        />
        <p className="md:w-[70%] w-full pt-4 md:text-xl text-lg text-text">
          {" "}
          {project.description}{" "}
        </p>
        <div className="pt-4 flex xl:flex-row flex-col md:w-[70%] w-full items-center justify-between">
          <div className="flex items-center">
            <p className="font-bold text-2xl text-text">Skills: </p>
            <div className="flex md:pl-4">
              {project.skills.map((skill, index) => (
                <img
                  src={skill}
                  alt={project.skillsAlt[index]}
                  className="h-[50px]"
                />
              ))}
            </div>
          </div>
          <a
            href={project.link}
            className="md:text-xl text-lg mt-2 rounded-full hover:bg-accent md:px-4 md:py-2 pt-8 text-text"
          >
            Link to the project
          </a>
          <a
            href={project.github}
            className="mt-2 text-text md:text-xl text-lg rounded-full hover:bg-accent md:px-4 md:py-2 pt-8 pb-8"
          >
            Link to the GitHub codebase
          </a>
        </div>
      </div>
    );
  }
};
