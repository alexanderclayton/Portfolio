//import//
import Headshot from "../assets/Headshot_500x500_circle.png";
import { techStack } from "../data/TechStack";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center font-Quicksand px-4 xl:px-12 pt-24"
    >
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex justify-center mr-6">
          <img
            src={Headshot}
            alt="headshot"
            className="max-h-[250px] sm:max-h-[350px]"
          />
        </div>
        <div className="p-4 sm:w-[50%] md:w-[60%] lg:w-[70%] xl:w-[90%]">
          {" "}
          <h1 className="font-Kalam text-2xl">About Me</h1>{" "}
          <p>
            {" "}
            <span className="pl-8 font-Kalam">Hello World!</span> I'm Alex, a
            developer based in Kansas, USA. Formerly in hospitality management,
            I transitioned to coding through a bootcamp at the University of
            Kansas. Coding allows me to fully engage my passion for building,
            providing me with the gratification of seeing projects come to
            fruition.{" "}
          </p>{" "}
          <p>
            {" "}
            <span className="pl-8">I</span> am enthusiastic about undertaking
            new projects, mastering emerging technologies, and expanding my
            network within the web development community.{" "}
          </p>{" "}
        </div>
      </div>
      <div className="w-full pt-12 flex flex-col sm:flex-row sm:items-center">
        <h1 className="px-4 text-2xl font-Kalam">Tech Stack:</h1>
        <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-14 p-4 w-full">
          {techStack.map((tech, idx) => (
            <img key={idx} src={tech.src} alt={tech.alt} className="p-2" />
          ))}
        </div>
      </div>
    </section>
  );
};
