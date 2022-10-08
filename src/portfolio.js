/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Dwaipayan Guha",
  title: "Hi, I'm Dwaipayan",
  subTitle: [
    emoji(
      "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
    )
  ],
  resumeLink:
    "https://drive.google.com/file/d/1qf27MTvhtET-UXoJi4amxBbM3lpLzQ5y/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/dwaipayan-guha-3583851b3/",
  github: "https://github.com/dwaipayanguha",
  gitlab: "https://gitlab.com/lost-zoro",
  gmail: "dwaipayanguha10@gmail.com",
  codeforces: "https://codeforces.com/profile/UNOwen98",
  codechef: "https://www.codechef.com/users/dwaipayanguha",
  leetcode: "https://leetcode.com/UNOwen98/",
  atcoder: "https://atcoder.jp/users/UNOwen98",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Ex-SDE Intern @ Wells Fargo in the field of Big Data Analytics"),
    emoji("⚡ B.E. 2023 Grad @ Jadavpur University, Kolkata, India"),
    emoji(
      "⚡ Competitive Programmer : 5 star @ Codechef, Expert @ Codeforces, 2000+ rating @ Leetcode"
    ),
    emoji("⚡ Full stack developer"),
    emoji("⚡ Beginner @ Blockchain Development")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
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
      skillName: "Version Control",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jadavpur University",
      logo: require("./assets/images/jadavpurUniversityLogo.png"),
      subHeader: "B.E. in Electrical Engineering",
      duration: "June 2019 - June 2023",
      desc: "CGPA: 9.29 / 10.0",
      descBullets: [
        "Member of the Science Club and Coding Club",
        "Mentored students in competitive programming"
      ]
    },
    {
      schoolName: "Indian Institute of Technology, Madras",
      logo: require("./assets/images/iitMadrasLogo.png"),
      subHeader: "Diploma in Computer Programming",
      duration: "December 2020 - April 2022",
      desc: "CGPA: 9.0 / 10.0",
      descBullets: [
        "Relevant Courses: Database Management Systems, Data Structures and Algorithms, Application Development, Object Oriented Programming in Java, System Commands in Linux"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Wells Fargo",
      companylogo: require("./assets/images/wellsFargoLogo.png"),
      date: "June 2022 - August 2022",
      desc: "Skills: Apache Spark · Apache Kafka · Scala · Google Cloud Platform (GCP)",
      descBullets: [
        "Built a real-time stream analytics pipeline to consume, process and analyse incoming streams of raw-data on transactions.",
        "Used Apache Kafka as publish-subscriber messaging system and Apache Spark streaming to perform analytical transformation of data, based on business logic.",
        "Deployed the Apache Spark cluster on Google Cloud Platform."
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
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/aiDriverLogo.png"),
      projectName: "Train your AI driver",
      projectDesc:
        "Simulation of a self-driving car through user-defined traffic with a visualization of the neural network.",
      footerLink: [
        {
          name: "Live Link",
          url: "https://train-your-ai-driver.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/dwaipayanguha/train-your-ai-driver"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ethereumLogo.png"),
      projectName: "Ethereum Raffle",
      projectDesc:
        "Built a decentralised application that allows users to enter a Ethereum lottery on a Solidity blockchain contract.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/dwaipayanguha/ethereum-raffle"
        }
      ]
    },
    {
      image: require("./assets/images/expenseTrackerLogo.png"),
      projectName: "Voice powered expense tracker",
      projectDesc:
        "Built a React application which allows users to track their day-to-day expenses with their voice",
      footerLink: [
        {
          name: "Live Link",
          url: "https://speech-powered-budget-tracker.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/dwaipayanguha/voice-powered-budget-tracker"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/elsevierLogo.png"),
      projectName: "Automatic Sleep Staging",
      projectDesc:
        "Publication on automatic sleep staging in Biomedical Signal Processing and Control, Elsevier.",
      footerLink: [
        {
          name: "Publication",
          url: "https://www.sciencedirect.com/science/article/abs/pii/S174680942200341X"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/drowsinessLogo.png"),
      projectName: "Drowsiness Detection",
      projectDesc:
        "Built a desktop application which detects the drowsiness of the user, and then puts the laptop to sleep.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/dwaipayanguha/Problem_Solvers"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"),
  subtitle: "",

  achievementsCards: [
    {
      title: "Google Kickstart",
      subtitle: "Global Rank of 250",
      image: require("./assets/images/googleKickstartLogo.jpg"),
      imageAlt: "Google Kickstart Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1O_adzv99cUPXPZO95D8atwKJDY-HrTto/view?usp=sharing"
        }
      ]
    },
    {
      title: "Meta Hackercup",
      subtitle: "Global Rank of 646 in Qualification Round",
      image: require("./assets/images/hackercupLogo.jpg"),
      imageAlt: "Meta HackerCup Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/101OQHn17EaXwyTxbN3r7e60ZCWlzeln0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Reply Code Challenge",
      subtitle: "Global Rank of 43",
      image: require("./assets/images/replyCodeLogo.jpg"),
      imageAlt: "Reply Code Challenge Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/16EWmdoPVCV9fpjeEMKTNcTus7umPHqjM/view?usp=sharing"
        }
      ]
    },
    {
      title: "CodeCraft-21",
      subtitle: "Global Rank of 81 in round hosted on Codeforces",
      image: require("./assets/images/codeforcesContestLogo.png"),
      imageAlt: "Reply Code Challenge Logo",
      footerLink: [
        {
          name: "Standings",
          url: "https://codeforces.com/contest/1498/standings"
        }
      ]
    },
    {
      title: "Google HashCode",
      subtitle: "Scored 583139 points",
      image: require("./assets/images/hashCodeLogo.png"),
      imageAlt: "Google HashCode Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1b-Z8Y4O0cBQdeCS9wMLn8tLZx3f2Grm-/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9830285782",
  email_address: "dwaipayanguha10@gmail.com"
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
