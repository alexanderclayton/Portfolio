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
          <h1 className="font-Kalam text-2xl text-text">About Me</h1>{" "}
          <p className="text-text">
            <span className="font-Kalam">Hello World!</span> I'm Alex, a
            full-stack developer based in Kansas, USA. I'm a bootcamp grad with
            a background in hospitality management, currently looking for the
            next stop in my professional career. I love coding because nothing
            beats the feeling of solving a problem by building something from
            the ground up. There's always something new to learn, with all the
            tools we need to change the world at our fingertips. It's been an
            exciting journey, and I can't wait to see what's in store for me
            next!
          </p>
        </div>
      </div>
      <div className="w-full pt-12 flex flex-col sm:flex-row sm:items-center">
        <h1 className="px-4 text-2xl font-Kalam text-text">Tech Stack:</h1>
        <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-14 p-4 w-full">
          {techStack.map((tech, idx) =>
            tech.type === "svg" ? (
              <img key={idx} src={tech.src} alt={tech.alt} className="p-2" />
            ) : (
              <div className="flex items-center justify-center">
                <i className={`${tech.src} text-text text-7xl`} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
