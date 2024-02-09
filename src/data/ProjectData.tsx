import Image1 from "../assets/group-project-1.jpg";
import Image2 from "../assets/kanye-rest-image.jpg";
import Image3 from "../assets/languages-signpost.jpg";
import Image4 from "../assets/abc35be4-2941-42d8-8f8d-f738ecd6e574.__CR0,0,300,300_PT0_SX300_V1___.jpg";
import Image5 from "../assets/THGExteriorsThumbnail.png";

interface IProjectCards {
  id: number;
  name: string;
  image: string;
  skills: string[];
  skillsAlt: string[];
  link: string;
  alt: string;
  description: string;
  github: string;
}

export const ProjectCards: IProjectCards[] = [
  {
    id: 0,
    name: "Group Project #1: NPS Trip Planner",
    image: Image1,
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    skillsAlt: ["HTML", "CSS", "JavaScript"],
    link: "https://cecurtiss.github.io/parks-and-weather-app/index.html",
    alt: "Beautiful national park scene",
    description:
      "Our first group project in the KU Coding Bootcamp.  We decided to create a US National Park trip planner utilizing the NPS.gov api and the OpenWeather api.  This was a fun exercise, and really helped build my skills.",
    github: "https://github.com/CECurtiss/parks-and-weather-app",
  },
  {
    id: 1,
    name: "Kanye.rest",
    image: Image2,
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    skillsAlt: ["HTML", "CSS", "JavaScript"],
    link: "https://alexanderclayton.github.io/kanye.rest/",
    alt: "Kanye holding his arms out in inspiration",
    description:
      "Although simple, this is my favorite project.  I found the kanye.rest api while traveling down a YouTube rabbit-hole, and decided to play around with it.  The api returns a random Kanye quote json object, that renders on screen at the push of a button.  Easy to use, and equipped with endless inspiration.",
    github: "https://github.com/alexclaytonbootcamp/kanye.rest",
  },
  {
    id: 2,
    name: "Hello from the World",
    image: Image3,
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    skillsAlt: ["HTML", "CSS", "JavaScript"],
    link: "https://alexanderclayton.github.io/Hello-From-the-World/",
    alt: "Signpost pointing towards different languages",
    description:
      "This was a project I created when we learned how to navigate throughout HTML pages.  It's not the most optimized code, but it was really interesting to work with the different languages, and the CSS styling was quite a bit of fun.",
    github: "https://github.com/alexclaytonbootcamp/Hello-From-the-World",
  },
  {
    id: 3,
    name: "Mythical Creatures Art Prompts",
    image: Image4,
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    ],
    skillsAlt: ["Firebase", "TypeScript", "React", "Node.JS"],
    link: "https://card-draw.vercel.app/",
    alt: "Mythical Creatures Logo",
    description:
      "This is a digital version of Taylan's favorite card game.  A simple art prompt game where the user draws 5 topic cards, and attempts to draw an animal that incorporates all 5 topics.  This was a fun holiday sideproject, and provided a great solution to our deck shuffling problem. All rights to the original product belong to Drawing Deck, LLC.",
    github: "https://github.com/alexanderclayton/CardDraw",
  },
  {
    id: 4,
    name: "THGExteriors",
    image: Image5,
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    ],
    skillsAlt: ["Firebase", "TypeScript", "React", "Node.JS"],
    link: "https://thg-exteriors.vercel.app/",
    alt: "Thumbnail of the THGExteriors CRM",
    description:
      "Slightly different take on a 'full-stack' React application.  This is a CRM I built for a friends business using React for the frontend and Firebase BaaS for the backend.  This was an exciting project to start 2024 and acted as a great opportunity to learn and build several skills.",
    github: "https://github.com/alexanderclayton/THGExteriors",
  },
];
