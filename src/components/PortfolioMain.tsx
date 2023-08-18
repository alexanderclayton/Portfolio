import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectCards } from "../data/ProjectData";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const PortfolioMain: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSlide = (direction: "left" | "right") => {
    const scrollAmount = 280;
    const newScrollPosition =
      direction === "left"
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
  };

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
            onClick={() => handleSlide("left")}
            className="p-2 pr-3 bg-light-blue text-light-primary hover:text-dark-secondary hover:cursor-pointer rounded-full"
          />
        </div>
        <div
          id="slider"
          className="flex md:flex-row w-[80%] md:w-[90%] overflow-x-hidden whitespace-nowrap items-center scroll-smooth"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {ProjectCards.map((project, idx) => (
            <ProjectCard key={idx} id={idx} name={project.name} image={project.image} />
          ))}
        </div>
        <div className="md:w-[5%] w-[10%] flex items-center justify-center">
          <BiSolidRightArrow
            size={60}
            onClick={() => handleSlide("right")}
            className="p-2 pl-3 bg-light-blue text-light-primary hover:text-dark-secondary hover:cursor-pointer rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;

