import {
    // FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,

} from "react-icons/fa";

import project1 from "../../img/e.jpg";
import project2 from "../../img/App.jpg";
import project3 from "../../img/p.jpg";
import project4 from "../../img/b.jpg";
import project5 from "../../img/t.png";
import project6 from "../../img/online.jpg";
import project7 from "../../img/fe.jpg";
import project8 from "../../img/Re.jpg";
import project9 from "../../img/w.jpg";
// import project10 from "../../img/11bcd6e3a21d4d5a898af76d401035af70eb33da_1669109301.webp";

export const LINKS =[
    {id : "projects" , name :"projects"},
    {id: "about" ,  name :"about"},
    {id: "experience" , name :"experience"},
    {id: "contact" ,name :"contact"}
];

export const MARQUEE_TEXT=
"React ,NEXT.js ,Node.js , MongoDb ,Tailwind ,My SQL , JavaScript ,Redis , Java ,Python ,";

export const PROJECTS = [
  {
    id: 1,
    title: "Ecommerce Website",
    description:
      "A full-featured e-commerce website built with React and node.js",
    imgSrc: project1,
    link: "https://example.com/social-media-app",
  },
  {
    id: 2,
    title: "Social Media APP",
    description: "A social media with real-time chat and notifications.",
    imgSrc: project2,
    link: "https://example.com/social-media-app",
  },
  {
    id: 3,
    title: "PortFolio website",
    description:
      "A personal protfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://example.com/social-media-app",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platfarm woth user authenication and content manamenet.",
    imgSrc: project4,
    link: "https://example.com/social-media-app",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "A task management tool to organize and prioritize work.",
    imgSrc: project5,
    link: "https://example.com/social-media-app",
  },
  {
    id: 6,
    title: "online Learning Platform",
    description:
      "A online learning platfarm offering various courses and  resources.",
    imgSrc: project6,
    link: "https://example.com/social-media-app",
  },
  {
    id: 7,
    title: "Fitness Tracker",
    description: "A mobile application to track fitness acivations and goals.",
    imgSrc: project7,
    link: "https://example.com/social-media-app",
  },
  {
    id: 8,
    title: "Recipe App",
    description: "An app for browsing and saving various cooking recipes.",
    imgSrc: project8,
    link: "https://example.com/social-media-app",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description: "A weather dashboard providing current weather data and forecasts.",
    imgSrc: project9,
    link: "https://example.com/social-media-app",
  },
  // {
  //   id: 10,
  //   title: "",
  //   description: "A task management tool to organize and prioritize work.",
  //   imgSrc: project10,
  //   link: "https://example.com/social-media-app",
  // },
];

export const ABOUT= 
"As a dedicated full Stack developer , I specialize in creating dynamic and responsive web applications that provide seamless user experiences, with a strong foundations im both front-end and back-end technologies , I excel in bulding robust and acalable solutions , My experience includes working with JavaScript frameworks such as React and Node.js , as well as proficiency in databases linke MonoDB and SQL.";

export const EXPERIENCES = [
  {
    company: "Google ",
    role: "software Enginner",
    year: "12/2024 -present ",
    description:
      "Developing and maintaining scalabe web applications using mpdern technologies, Collaborating with cross-functional teams to design and implement new features",
  },
  {
    company: "Facebook ",
    role: "Frontend Developer",
    year: "12/2021 -2023 ",
    description:
      "implemnted user interface for web applicatiolns using React and Redux , worked closely with designers to ensure seamless user experiences,",
  },
];

export const SOCIAL_MEDIA_LINK = [
  {
    href: "https://x.com",
    icon: <FaFacebook fontSize={24}
     className="hover:opacity-80" />,
  },
  {
    href: "https://x.com",
    icon: <FaDiscord fontSize={24} 
    className="hover:opacity-80" />,
  },
  {
    href: "https://x.com",
    icon: <FaInstagram fontSize={24} 
    className="hover:opacity-80" />,
  },
  {
    href: "https://github.com",
    icon: <FaGithub fontSize={24} 
    className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com",
  //   icon: <FaXTwitter fontSize={24}
  //    className="hover:opacity-80" />,
  // },
  {
    href: "https://www.linkedin.com",
    icon: <FaLinkedin fontSize={24}
     className="hover:opacity-80" />,
  },
];

export const CONTACT={

    text:" I am always excited to collaborate on new and challenging projects, whether you hove specific project potential opportunities , Id love to hear from you",
    email:"Shayan1232@gmail.com",
    phone:"+9376..........",
};