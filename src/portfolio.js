/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mirza Ahmer Gull",
  title: "Hi all, I'm Ahmer",
  subTitle: emoji(
    "A passionate Data Engineer and Full Stack Developer 🚀 having an experience of building Data ETL-pipelines using various principles and power of cloud, Full Stack Web applications with Python / Django / Reactjs / and some other cool libraries, tools and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aBVTpaEofCyY2HOTFxbsiTZtMn9O6ip6/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mirzaahmergull",
  linkedin: "https://www.linkedin.com/in/mirzaahmergull/",
  gmail: "mirzaahmergull@outlook.com",
  facebook: "https://www.facebook.com/mirzaahmergull",
  medium: "https://medium.com/@mirzaahmergull",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/mirzaahmergull/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "django rest framework",
      fontAwesomeClassname: "fab fa-drf"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "snowflake",
      fontAwesomeClassname: "fab fa-snowflake"
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "fab fa-postgres"
    },
    {
      skillName: "data warehousing",
      fontAwesomeClassname: "fab fa-datawarehousing"
    },
    {
      skillName: "github actions",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Data ETL pipelines development",
      fontAwesomeClassname: "fab fa-piplines"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fab fa-cd/cd"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fab fa-mongo"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Punjab University College of Information Technology (PUCIT)",
      logo: require("./assets/images/pucitLogo.png"),
      subHeader: "Bachelors of Computer Science",
      duration: "September 2018 - July 2022",
      desc: "Bachelors studies with final year project in Web",
      descBullets: [
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development (Reactjs)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Backend REST API",
      progressPercentage: "100%"
    },
    {
      Stack: "Elastic Search",
      progressPercentage: "80%"
    },
    {
      Stack: "Google Cloud Platform",
      progressPercentage: "100%"
    },
    {
      Stack: "AWS",
      progressPercentage: "75%"
    },
    {
      Stack: "Data ETL-pipline development",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer (Full-time)",
      company: "MLSense.ai",
      companylogo: require("./assets/images/mlsenseLogo.jpg"),
      date: "June 2021 – Present",
      desc: "My job here includes development and maintainance of ETL piplines, create usefull analytics from raw data and present on personalized Web interfacees ",
      descBullets: [
        "Architect Models and Infrastuctures for projects",
        "Design and implement Serverless Agents for various small tasks",
        "Develop and Maintain ETL pipelines",
        "Develop web applications and REST API's in Django",
        "Develop user friendly Web Application User Interfaces in React",
        "Solve Complex Programming Problems",
        "Share my knowledge with juniors",
        "and much more, Download my CV for more Information"

      ]
    },
    {
      role: "Freelancer",
      company: "Fiverr",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2020 – July 2021",
      desc: "Freelance services including python automation, python scripts, data scrapping, data cleasing and processing"
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
  title: "Major Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/mlsenseLogo.jpg"),
      projectName: "IPA project at MlSense.ai",
      projectDesc: `(Client Project) Lead a team of 4 developers to create an End-to-End Full Stack Web
      Application in Django showing insights to useful data in beautifully presented graphs and tables created with ChartJS in
      React,created ETL pipeline using Cloud Functions to populate data in Cloud SQL from Facebook API, Trueclicks API
      and Google Display and Video API, Application Deployed on GCP(AppEngine)`,
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mlsense.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mlsenseLogo.jpg"),
      projectName: "DMS project at MlSense.ai",
      projectDesc: `(Client Project) Worked along with a team of 6 Engineers to develop a Web App for
      document management system for UK Government, created REST-API in Django and React Front end using MUI,
      Application Deployed on GCP(AppEngine) using GitHub Actions`,
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mlsense.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/mlsenseLogo.jpg"),
      projectName: "Snowflake Data Warehousing project",
      projectDesc: `(Client Project) Built Data ETL pipelines on millions of records, cleaning and maintaining them on
      daily basis, Created View, Materialized Views which gave useful insights about streaming data`,
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mlsense.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/mlsenseLogo.jpg"),
      projectName: "Dictionaries App project at MlSense.ai",
      projectDesc: `(MlSense Product) Made a Full Stack Application which can take any language
      and give its meanings, similar word/sentences from a total of 27+ Dictionaries, APIs and translate that word along with
      its meaning/sentence to any specified language within mili-seconds, Application Deployed on GCP(AppEngine) using
      GitHub Actions`,
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mlsense.ai/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Bronze Medal in ICPC Asia Topi Regional On-site Programming Contest,2021",
      subtitle:
        "Was part of the team that got selected second time for participation in ALL-PAKISTAN programming competition and achieved Bronze Medal",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "ICPC Logo",
      footerLink: [
        {
          name: "Medal",
          url: "https://drive.google.com/file/d/1tIanq9yxTsWXVb5Qdl0uP7uQKvkNJ7A5/view?usp=sharing"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  number: "+92-3014385785",
  email_address: "mirzaahmergull@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
