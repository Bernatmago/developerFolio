/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bernat Martínez",
  title: "Welcome, I'm Bernat",
  subTitle: emoji(
    "A passionate Software Developer that loves 💻 Videogame Development 🎮 & Artificial Inteligence 🤖."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12ERFzLLMWH7D7qEhznlrUTPghXwgSilj/view?usp=sharing",
  portfolioLink: "https://drive.google.com/file/d/1lACcpK_-KWKH2fkkaiiE-U4mWJ1IIeyI/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Bernatmago",
  linkedin: "https://www.linkedin.com/in/bernatmago/",
  gmail: "bernatmago@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/10137998/bernat-mart%c3%adnez",
  itchio:"https://bernatmago.itch.io/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I work as Lead Programmer in Akita Interactive which is a studio created by the entire class as the master final project. I also work as a software developer at an Adtech company called Smadex. On my free time I learn C++ and game development. Some of the tech and activities im familar with:",
  skills: [
    emoji("🎮 Engine & Gameplay Programming"),
    emoji("💻 Software Development"),
    emoji("🤖 Deep Learning & Machine Learning")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-copyright" // Fontawesome has no icon look somewhere else
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UPC School",
      logo: require("./assets/images/upcShoolLogo.png"),
      subHeader: "Master in Advanced Programming For AAA Videogames",
      duration: "October 2021 - Present",
      desc: "Learning C++ videogame development from scratch",
      descBullets: [
        "Final Project: Developing Hachiko Engine and building Érimos videogame using it."
      ]
    },
    {
      schoolName: "Universitat Politècnica de Catalunya",
      logo: require("./assets/images/upcLogo.png"),
      subHeader: "Master in Artificial Intelligence",
      duration: "September 2019 - January 2021",
      desc: "Participated in the HPAI group based on the Barcelona Supercomputing Center",
      descBullets: [
        "Master thesis: Study on the effect of high resolution & variable size data on feature representation transfer."
      ]
    },
    {
      schoolName: "Universitat Autònoma de Barcelona",
      logo: require("./assets/images/uabLogo.jpg"),
      subHeader: "Bachelor in Computer Science, Computation Specialization",
      duration: "September 2015 - June 2019",
      desc: "Ranked top 10% in the program. Developed the final project in collaboration with the Computer Vision Center",
      descBullets: [
        "Final project: Destruction detection on satellite imagery via deep learning"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Engine Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Gameplay Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Artificial Intelligence", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Gameplay Programmer",
      company: "Akita Interactive",
      companylogo: require("./assets/images/akitaLogo.png"),
      date: "February 2022 – Present",
      desc: "(Master Project) Engine & Gameplay Programming",
      descBullets: [
        "Contributed in the core engine used as the foundation for the final project.",
        "Developed forward batch rendering pipeline with PBR illumination and exponential fog.",
        "Worked on core gameplay systems like collision, movement & combat.",
        "Extended the engine integrating navmesh with dynamic obstacles, asset system and UI module.",
        "Worked with the team to set development goals and achieve them",
      ]
    },
    {
      role: "Developer, Data Science Team",
      company: "Smadex",
      companylogo: require("./assets/images/smLogo.jpg"),
      date: "April 2021 – Present",
      desc: "Machine Learning & Software Development",
      descBullets: [
        "Refactored multiple Python systems to improve its maintainability and functionalities.",
        "Developed quality of life features for the company Machine Learning systems using Scala and AWS.",
        "Dockerized environments and their build system from scratch.",
        "Main developer and maintainer of a key app exploration software.",
        "Helped in hiring interviews and training new joiners."
      ]
    },
    {
      role: "Back-End Intern",
      company: "WorldLine Global (Atos)",
      companylogo: require("./assets/images/wlLogo.png"),
      date: "April 2019 – August 2019",
      desc: "Back-End Development on an Agile environment for an IoT project.",
      descBullets: [
        "Participated in developing an IoT project using Java (Spring Boot). Also helped in defining and developing the test suite.",
        "Performed Front-End Development using Angular for an internal dashboard related to the IoT platform."
      ]
    },
    {
      role: "Business Intelligence Intern",
      company: "Minsait (Indra)",
      companylogo: require("./assets/images/indraLogo.png"),
      date: "October 2019 – March 2019",
      desc: "Database management and mantienance for an immportant client in the banking sector.",
      descBullets: [
        "Managed and mantained databases using PL/SQL for SegurCaixa.",
        "Developed data processing pipelines using ETL tools for a big insurance data warehouse."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Barcelona Supercomputing Center",
      companylogo: require("./assets/images/bscLogo.png"),
      date: "June 2018 – September 2018",
      desc: "Back-End Development on a BSC spin-off.",
      descBullets: [
        "Developed a REST API related to ash cloud simulations using NodeJS and data management using Express & Mongoose.",
        "Developed a custom unit testing suite using Python."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/chickenLogo.jpg"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chickenLogo.jpg"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/chickenLogo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/chickenLogo.jpg"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/chickenLogo.jpg"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+34-620420439",
  email_address: "bernatmago@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Bernatmago", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
