//import//
import Image from "../assets/fotor-ai-2023081675851.jpg";

export const Hero: React.FC = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center font-Quicksand">
      <div className="sm:w-[60%] w-full flex flex-col items-center">
        <div className="flex flex-col items-center sm:items-end">
          <p className="text-4xl md:text-5xl lg:text-6xl">Hi, my name is</p>
          <p className="font-Kalam text-8xl lg:text-10xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple text-transparent bg-clip-text md:text-9xl">
            Alex
          </p>
          <p className="text-3xl lg:text-5xl md:text-4xl">
            I build things for the web
          </p>
        </div>
        <div className="grid grid-cols-3 w-[40%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] 2xl:w-[15%] pt-6">
          <img
            className="px-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
          />
          <img
            className="px-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          />
          <img
            className="px-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </div>
      </div>
      <div className="w-[50%] xl:w-[60%] hidden sm:block">
        <span className="faded">
          <img src={Image} alt="placeholder" className="max-h-[850px]" />
        </span>
      </div>
    </section>
  );
};
