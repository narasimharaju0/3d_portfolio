import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    titlelogo,
    disneyclone,
    teslaUI,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
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
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "DisneyClone",
      icon: titlelogo,
      iconBg: "#383E56",
      date: "June 2023 - June 2023",
      points: [
        "This is the ReactJS Disney Plus Clone i created this by using ReactJS, JavaScript, Html, Css, Styled-Components, for rendreing the movies i used the Firebase in firebase for Database i used Firestore and for authentication i used the Firebase authentication i enabled only the google authentication .",
        "Implemented responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Tesla UI",
      company_name: "Using React Native and React.js",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2023 - May 2023",
      points: [
        "This is the developed by using javascript,Css,React.js and other related technologies.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    /*{
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },*/
    {
      name: "DisneyClone",
      description:
        "This is the ReactJS Disney Plus Clone i created this by using ReactJS, JavaScript, Html, Css, Styled-Components, for rendreing the movies i used the Firebase in firebase for Database i used Firestore and for authentication i used the Firebase authentication i enabled only the google authentication .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: disneyclone,
      source_code_link: "https://github.com/narasimharaju0/DisneyClone",
    },
    {
      name: "TeslaUI",
      description:
        "This is the UI clone of Tesla. I used React.js,Redux, Styled-components , Html, Css and jsx to creat this userInterface i divided the page into Components and i start working on it. I created Header.js component, Home.js component and Section.js components to design this Teslaclone UsrInterface.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: teslaUI,
      source_code_link: "https://github.com/narasimharaju0/Tesla-teslaclone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };