//import//
import { ProjectCard } from "./ProjectCard";
import { ProjectCards } from "../data/ProjectData";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export const PortfolioMain = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider && window.innerWidth < 640) {
      slider.scrollLeft = slider.scrollLeft - 280;
    } else if (slider) {
      slider.scrollLeft = slider.scrollLeft - 400;
    }
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider && window.innerWidth < 640) {
      slider.scrollLeft = slider.scrollLeft + 280;
    } else if (slider) {
      slider.scrollLeft = slider.scrollLeft + 400;
    }
  };

  return (
    <section
      id="projects"
      className="xl:px-12 flex flex-col md:flex-row px-4 items-center py-12 pt-24"
    >
      <div className="md:relative md:w-[10%]">
        <h1 className="md:absolute md:text-rotate md:text-4xl font-bold font-Kalam text-4xl">
          Portfolio
        </h1>
      </div>
      <div className="md:w-[90%] w-full flex">
        <div className="md:w-[5%] w-[10%] flex items-center justify-center">
          <BiSolidLeftArrow
            size={60}
            onClick={slideLeft}
            className="p-2 pr-3 bg-light-primary/30 text-dark-secondary hover:text-light-background hover:bg-light-primary hover:cursor-pointer rounded-full"
          />
        </div>
        <div
          id="slider"
          className="flex md:flex-row w-[80%] md:w-[90%] overflow-x-hidden whitespace-nowrap items-center scroll-smooth"
        >
          {ProjectCards.map((project, idx) => (
            <ProjectCard
              key={idx}
              id={project.id}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
        <div className="md:w-[5%] w-[10%] flex items-center justify-center">
          <BiSolidRightArrow
            size={60}
            onClick={slideRight}
            className="p-2 pl-3 bg-light-primary/30 text-dark-secondary hover:text-light-background hover:bg-light-primary hover:cursor-pointer rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
