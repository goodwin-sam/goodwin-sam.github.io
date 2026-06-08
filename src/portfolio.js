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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Sam Goodwin",
  title: "Hello, I'm Sam",
  subTitle: emoji(
    "Magna Cum Laude Computer Science graduate passionate about systems programming, computer vision, and IoT. I love designing clean, efficient, and well-documented solutions using Go, Java, Python, and C++."
  ),
  resumeLink:
    "https://raw.githubusercontent.com/goodwin-sam/Resume/main/Sam-Goodwin_Resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/goodwin-sam",
  linkedin: "https://www.linkedin.com/in/goodwin-sam",
  gmail: "sam@samgoodwin.dev",
  HackerRank: "https://www.hackerrank.com/profile/samgoodwin",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate about writing clean, well-structured code and building high-performance systems in Go, Java, Python, and C++",
  skills: [
    emoji(
      "⚡ Building scalable backend systems and concurrent applications using Go and Java"
    ),
    emoji(
      "⚡ Creating real-time computer vision systems and autonomous IoT applications"
    ),
    emoji(
      "⚡ Developing cross-platform desktop tools and data visualization solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "golang", fontAwesomeClassname: "fas fa-code"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "c++", fontAwesomeClassname: "fab fa-cuttlefish"},
    {skillName: "bash", fontAwesomeClassname: "fas fa-terminal"},

    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "sql", fontAwesomeClassname: "fas fa-database"},

    {skillName: "opencv", fontAwesomeClassname: "fas fa-eye"},
    {skillName: "mediapipe", fontAwesomeClassname: "fas fa-hand-paper"}, // or fas fa-camera
    {skillName: "linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "raspberry-pi", fontAwesomeClassname: "fab fa-raspberry-pi"},
    {skillName: "arduino", fontAwesomeClassname: "fas fa-microchip"},

    {skillName: "fyne", fontAwesomeClassname: "fas fa-desktop"}, // GUI
    {skillName: "javafx", fontAwesomeClassname: "fas fa-window-maximize"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bridgewater State University",
      logo: require("./assets/images/Bridgewater-State-University-logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2021 - 2025",
      desc: "Magna Cum Laude (GPA: 3.8)",
      descBullets: [
        "Consistently recognized on Dean’s List throughout entire program",
        "Developed strong foundation in Golang, Java, Python, C++, and Bash/Shell",
        "Focused on building practical systems, IoT applications, and computer vision projects"
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Property Manager",
      company: "Private Landlord",
      companylogo: require("./assets/images/property-manager-logo.png"), // You can change this
      date: "Summer 2020 – Present",
      desc: "Managed day-to-day operations of multiple residential rental properties while handling maintenance, tenant relations, and administrative tasks.",
      descBullets: [
        "Responded to tenant requests and critical issues (including nights/weekends) with high reliability",
        "Performed hands-on troubleshooting and repairs for plumbing, electrical, and general maintenance",
        "Managed rental payments, record keeping, vendor coordination, and scheduling"
      ]
    },
    {
      role: "Teaching Assistant & Tutor",
      company: "Curry College",
      companylogo: require("./assets/images/curry-college-logo.png"),
      date: "January 2019 – May 2020",
      desc: "Provided academic support to undergraduate students in Chemistry and Biology courses.",
      descBullets: [
        "Delivered one-on-one and small group tutoring sessions, helping students master complex scientific concepts",
        "Developed strong communication and problem-solving skills by breaking down difficult material",
        "Assisted faculty with study materials and group review sessions"
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
  subtitle: "Featured Personal Projects",
  projects: [
    {
      image: require("./assets/images/job-visualizer.png"),
      projectName: "Job Visualizer",
      projectDesc:
        "Cross-platform desktop application built in Go for importing, analyzing, and visualizing job data from Excel files with interactive mapping and charts.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/goodwin-sam/job-visualizer"
        }
      ]
    },
    {
      image: require("./assets/images/concurrent-file-processor.png"),
      projectName: "Concurrent File Processor",
      projectDesc:
        "High-performance Java desktop application that processes multiple text files concurrently using custom work-stealing thread pools.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/goodwin-sam/concurrent-file-processor"
        }
      ]
    },
    {
      image: require("./assets/images/smart-tello-follower.png"),
      projectName: "Smart Tello Follower",
      projectDesc:
        "Real-time computer vision system using Python, OpenCV, and MediaPipe to enable autonomous face tracking and gesture-controlled flight with a DJI Tello drone.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/goodwin-sam/smart-tello-follower"
        }
      ]
    },
    {
      image: require("./assets/images/enviro-sensor-hub.png"),
      projectName: "Environment Sensor Hub",
      projectDesc:
        "Arduino-based C++ environmental monitoring system that reads multiple sensors and controls fan, buzzer, and LCD display with smart threshold-based responses.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/goodwin-sam/enviro-sensor-hub"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "HackerRank Skills Certifications",

  achievementsCards: [
    {
      title: "SQL",
      subtitle: "Advanced • Intermediate • Basic",
      image: require("./assets/images/SQL (Advanced) Certificate.png"),
      imageAlt: "HackerRank SQL Certifications",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/062f1e90bd99"
        }
      ]
    },
    {
      title: "Go",
      subtitle: "Intermediate • Basic",
      image: require("./assets/images/Go (Intermediate) Certificate.png"),
      imageAlt: "HackerRank Go Certifications",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/6d76d6ec3c0c"
        }
      ]
    },
    {
      title: "Java",
      subtitle: "Basic",
      image: require("./assets/images/Java (Basic) Certificate.png"),
      imageAlt: "Java Basic Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/222cd2fd4445"
        }
      ]
    },
    {
      title: "Python",
      subtitle: "Basic",
      image: require("./assets/images/Python (Basic) Certificate.png"),
      imageAlt: "Python Basic Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/5b8c0e135d19"
        }
      ]
    }
  ],
  display: true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to software development opportunities, feel free to reach out.",
  number: "(508) 562-1751",
  email_address: "sam@samgoodwin.dev",
  github: "https://github.com/goodwin-sam",
  linkedin: "https://linkedin.com/in/goodwin-sam",
  hackerrank: "https://hackerrank.com/profile/samgoodwin"
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
  isHireable,
  resumeSection
};
