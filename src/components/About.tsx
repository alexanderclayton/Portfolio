//import//
import Headshot from "../assets/Headshot_500x500_circle.png";
import Axios from "../assets/axios3626.jpg";

export const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col items-center font-Quicksand px-4 xl:px-12">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex justify-center mr-6">
          <img src={Headshot} alt="headshot" className="max-h-[250px] sm:max-h-[350px]"/>
        </div>
        <div className="p-4 sm:w-[50%] md:w-[60%] lg:w-[70%] xl:w-[90%]">
          <h1 className="font-Kalam text-2xl">About Me</h1>
          <p>
            <span className="pl-8 font-Kalam">Hello World!</span> I'm Alex, a
            developer from the beautiful state of Kansas in the USA. I've always
            enjoyed tinkering with new technologies, but spent the early part of
            my professional career in the hospitality industry. Throughout my
            decade plus in hotels, I went from answering phones at the front
            desk to running a full-service operation as general manager. I loved
            the industry, for the most part because I loved working with and
            meeting new people.
          </p>
          <p>
            <span className="pl-8">I've</span> always taken satisfaction in
            building things however, and the hotels wasn't always able to
            scratch that itch. So I said goodbye to the industry and enrolled in
            a bootcamp offered by the University of Kansas and learned how to
            code. It's been everything I could have asked for and more. Each new
            project I take on allows me to devote 100% of my focus and energy
            into something, and gives me the satisfaction of a completed project
            in the end.
          </p>
          <p>
            <span className="pl-8">I</span> love the space I've found myself in,
            and am excited about the prospects of new projects, learning new
            technologies, and meeting new people as I continue my journey
            through the world of building things for the web.
          </p>
        </div>
      </div>
      <div className="w-full pt-12 flex flex-col sm:flex-row sm:items-center">
        <h1 className="px-4 text-2xl font-Kalam">Technologies:</h1>
        <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-14 p-4">
          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
          <div className="flex justify-center items-center">
            <img src={Axios} alt="axios" />
          </div>

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
          />

          <img
            className="p-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
          />
        </div>
      </div>
    </section>
  );
};
