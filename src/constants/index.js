import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  mysql,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  wordpress,
  mernstack,
  webdev,
  coding,
  reactlogo,
  netflixClone,
  myEcom,
  simonGame,
  threejs,
  drumKit,
  menuApp,
  counter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Digital Marketing Expert",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Evolution of Web Skills",
    company_name: "College",
    icon: webdev,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Learned HTML basics, created simple web pages",
      "Got familiar with CSS for styling and design.",
      "Early 2021 - Styling:Explored advanced CSS techniques for responsive designs.",
      "Mid 2021 - Interactivity:Introduced to JavaScript, added interactivity like form validation.",
      "Late 2021 - Integration:Combined HTML, CSS, and JavaScript f or interactive web projects.",
    ],
  },
  {
    title: "Advance Web tech and personal projects",
    company_name: "Taking WebDev Skills to Next Level",
    icon: coding,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Learned about more advanced web development technologies, such as Bootsrap, PHP, jQuery, MySQL, Wordpress, Advance Js i.e ES6,DOM etc .",
      "Build personal projects that use these advanced Web technologies(frontEnd & BackEnd)-For details go to MY PROJECTS section below .",
      "Continued to learn and grow as a web developer.",
    ],
  },
  {
    title: "React.Js",
    company_name: "Frond End Framework",
    icon: reactlogo,
    iconBg: "#383E56",
    date: "Aug 2021 - Aug 2022  ",
    points: [
      "Core React Concepts:    Mastered functional and class components , understanding props and state.Utilized React Hooks, such as useState and useEffect, for state and side effects",
      "Routing and Navigation:   Implemented React Router for seamless navigation and nested routes.",
      "Global State Management:   Embraced Redux for complex state management using actions, reducers, and the store.",
      "API Integration and Styling:   Fetched data from APIs using Axios and managed async operations,Styled components using libraries like Material-UI and styled-components.",
      "Practical Projects and Growth: Applied knowledge to real-world projects, collaborating with teams. Enhanced testing skills, optimized performance, and continued learning.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "mernstack",
    icon: mernstack,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Expanded React skills by integrating it with the back-end using Axios and Fetch.",
      "Developed back-end services using Node.js, including authentication and API endpoints.",
      "Gained expertise in building robust RESTful APIs using Express.js",
      "Acquired proficiency in MongoDB for NoSQL database management.",
      "Learned data modeling, CRUD operations, and integration with Mongoose",
      "Learned secure user authentication techniques using JWT and bcrypt.",
      "Applied MERN skills to personal projects, showcasing practical expertise",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Not Available right now",
    name: "Sara Khan",
    designation: "CFO",
    company: "Sysytems Limited",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Not Available right now",
    designation: "COO",
    name: "Ali Khan",
    company: "Ropstam",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Not Available right now",
    name: "Saira",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix-Clone",
    description:
      "React.js Netflix clone utilizes an external API to provide users with the latest movies and shows. With a sleek design and responsive interface, it offers an immersive streaming experience similar to Netflix.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: netflixClone,
    source_code_link: "https://github.com/",
  },
  {
    name: "MyEcom Web App",
    description:
      "MyEcom is a dynamic e-commerce web app built with the MERN stack, empowering users to shop online effortlessly. With a user-friendly interface, it offers a wide range of products for purchase, a smooth shopping cart experience, and secure payment options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: myEcom,
    source_code_link: "https://github.com/",
  },
  {
    name: "Simon Game",
    description:
      "Simon Game is a classic memory-based JavaScript web app where players replicate a sequence of colors and sounds.it's a fun game that tests memory and pattern recognition skills using HTML, CSS, JavaScript, and jQuery.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },

      {
        name: "jQuery",
        color: "text-blue-800",
      },
      {
        name: "javaScript",
        color: "text-yellow-300",
      },
    ],
    image: simonGame,
    source_code_link: "https://github.com/",
  },
  {
    name: "DrumKit",
    description:
      "The Drum Kit web app is an interactive music experience built with HTML, CSS, and JavaScript. Users can play a virtual drum kit by either clicking with the mouse or pressing corresponding keys on the keyboard, creating a fun and rhythmic experience.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },

      {
        name: "javaScript",
        color: "text-yellow-300",
      },
    ],
    image: drumKit,
    source_code_link: "https://github.com/",
  },
  {
    name: "menuApp",
    description:
      "The MenuApp is a restaurant web app, developed with HTML, CSS, and JavaScript, offers a user-friendly interface with filtering options. Customers can effortlessly explore the menu, refine their choices, and find the perfect dish, enhancing their dining experience.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },

      {
        name: "javaScript",
        color: "text-yellow-300",
      },
    ],
    image: menuApp,
    source_code_link: "https://github.com/",
  },

  {
    name: "Counter",
    description:
      "The counter, built with HTML, CSS, and JavaScript, dynamically changes color based on the number displayed. When the number is below zero, it turns red, and when it's above zero, it switches to green, providing instant visual feedback on the value's positivity or negativity",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },

      {
        name: "javaScript",
        color: "text-yellow-300",
      },
    ],
    image: counter,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
