
import Image1 from '../assets/group-project-1.jpg'
import Image2 from '../assets/kanye-rest-image.jpg';
import Image3 from '../assets/languages-signpost.jpg';
import Image4 from '../assets/placeholder-image-4.jpg';
import Image5 from '../assets/collage-cat.jpg';

interface IProjectCards {
    name: string
    image: string
    skills: string
    link: string
    alt: string
    description: string
    github: string

}

export const ProjectCards: IProjectCards[] = [
    {
        name: "Group Project #1: NPS Trip Planner",
        image: Image1,
        skills: "HTML, CSS, JavaScript",
        link: "https://cecurtiss.github.io/parks-and-weather-app/index.html",
        alt: "Beautiful national park scene",
        description: "Our first group project in the KU Coding Bootcamp.  We decided to create a US National Park trip planner utilizing the NPS.gov api and the OpenWeather api.  This was a fun exercise, and really helped build my skills.",
        github: "https://github.com/CECurtiss/parks-and-weather-app"
    },
    {
        name: "Kanye.rest",
        image: Image2,
        skills: "HTML, CSS, JavaScript",
        link: "https://alexanderclayton.github.io/kanye.rest/",
        alt: "Kanye holding his arms out in inspiration",
        description: "Although simple, this is my favorite project.  I found the kanye.rest api while traveling down a YouTube rabbit-hole, and decided to play around with it.  The api returns a random Kanye quote json object, that renders on screen at the push of a button.  Easy to use, and equipped with endless inspiration.",
        github: "https://github.com/alexclaytonbootcamp/kanye.rest"
    },
    {
        name: "Hello from the World",
        image: Image3,
        skills: "HTML, CSS, JavaScript",
        link: "https://alexanderclayton.github.io/Hello-From-the-World/",
        alt: "Signpost pointing towards different languages",
        description: "This was a project I created when we learned how to navigate throughout HTML pages.  It's not the most optimized code, but it was really interesting to work with the different languages, and the CSS styling was quite a bit of fun.",
        github: "https://github.com/alexclaytonbootcamp/Hello-From-the-World"
    },
    {
        name: "TV Show Message Board",
        image: Image4,
        skills: "HTML, CSS, JavaScript, Node.js",
        link: "https://gitlit-group-5.herokuapp.com/",
        alt: "Mysterious underwater scene",
        description: "This was our second group project in the KU Coding Bootcamp.  In its inception, we were maybe a bit too ambitious, but as we learn and build our skills, this should be a fun project to complete some day :)",
        github: "https://github.com/alexclaytonbootcamp/GitLit-Group-5"
    },
    {
        name: "Collagio",
        image: Image5,
        skills: "MongoDB, Express, React, Node",
        link: "https://collagio.herokuapp.com/",
        alt: "Incredibly cute kitty made out of photos to look like a collage",
        description: "This was our 3rd group project in the KU coding bootcamp.  We created a collage-maker MERN application, using the react-draggable and react-resizable packages to drag photos around and print the finished product.",
        github: "https://github.com/alexanderclayton/TeamAwesome"
    }
    
];