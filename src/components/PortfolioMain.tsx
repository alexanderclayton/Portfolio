import React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectCards } from "../data/ProjectData";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export const PortfolioMain: React.FC = () => {
  return (
    <section className="xl:px-12 flex flex-col md:flex-row px-4 items-center">
      <div className="md:relative md:w-[10%]">
        <h1 className="md:absolute md:text-rotate text-3xl font-bold font-Quicksand">
          Portfolio
        </h1>
      </div>
      <div className="md:w-[90%] w-full flex">
        <div className="md:w-[5%] w-[10%] flex items-center justify-center">
          <BiSolidLeftArrow
            size={60}
            className="p-2 pr-3 bg-light-blue text-light-primary hover:text-dark-secondary hover:cursor-pointer rounded-full"
          />
        </div>
        <div className="flex md:flex-row w-[80%] md:w-[90%] overflow-x-scroll whitespace-nowrap items-center">
          {ProjectCards.map((project, idx) => (
            <ProjectCard
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
        <div className="md:w-[5%] w-[10%] flex items-center justify-center">
          <BiSolidRightArrow
            size={60}
            className="p-2 pl-3 bg-light-blue text-light-primary hover:text-dark-secondary hover:cursor-pointer rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
