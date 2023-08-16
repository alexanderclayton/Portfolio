//import//
import { ProjectCard } from "./ProjectCard";
import { ProjectCards } from "../data/ProjectData";

export const PortfolioMain: React.FC = () => {
  return (
    <section className="flex justify-center font-Quicksand pt-16">
      <div className="w-[90%] flex sm:flex-row flex-col items-center relative">
        <div className="sm:absolute sm:left-0 sm:top-1/2 text-3xl sm:-rotate-90">
          <h1>Portfolio</h1>
        </div>
        <div className="sm:overflow-x-scroll scroll w-full sm:ml-36 flex justify-center">
          <div className="flex flex-col sm:flex-row sm:whitespace-nowrap">
            {ProjectCards.map((project, idx) => (
              <ProjectCard
                key={idx}
                id={idx}
                name={project.name}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
