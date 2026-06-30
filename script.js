// ==========================================================================
// 1. DATA DEFINITIONS (TEAM & PROJECTS)
// ==========================================================================

// All team member information.
// Note: We use the local image paths configured in the images.js source file (e.g. IMAGES.mrinal).
const TEAM_MEMBERS = [
  {
    name: "Mrinal Katariya",
    role: "Frontend Developer",
    image: IMAGES.mrinal, // Defined in images.js
    bio: "Passionate frontend developer focused on creating clean and responsive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"],
    github: "https://github.com/mrinalkatariya08",
    linkedin: "https://www.linkedin.com/in/mrinal-katariya-a54054387/"
  },
  {
    name: "Aditya Raj",
    role: "Frontend Developer",
    image: IMAGES.aditya, // Defined in images.js
    bio: "Creative frontend developer who enjoys building beautiful and interactive websites.",
    skills: ["HTML", "CSS", "JavaScript", "DOM", "GitHub"],
    github: "https://github.com/adityarajofficial021",
    linkedin: "https://www.linkedin.com/in/aditya-raj-a5a112381"
  },
  {
    name: "Aman Gupta",
    role: "Frontend Developer",
    image: IMAGES.aman, // Defined in images.js
    bio: "Motivated B.Tech student passionate about web development and continuously learning industry-relevant technologies.",
    skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Web Design"],
    github: "https://github.com/Aman-Gupta-08",
    linkedin: "https://www.linkedin.com/in/aman-gupta-41b9b9386/"
  },
  {
    name: "Piyush Juneja",
    role: "Frontend Developer",
    image: IMAGES.piyush, // Defined in images.js
    bio: "Frontend developer focused on creating elegant, responsive, and user-friendly websites.",
    skills: ["HTML", "CSS", "JavaScript", "UI Design", "GitHub"],
    github: "https://github.com/piyushsot25-11",
    linkedin: "https://www.linkedin.com/in/piyush-juneja-9358092b5/"
  },
  {
    name: "Abhishek",
    role: "Frontend Developer",
    image: IMAGES.abhishek, // Defined in images.js
    bio: "Frontend developer passionate about creating practical and modern web applications.",
    skills: ["HTML", "CSS", "JavaScript", "GitHub", "Web Development"],
    github: "https://github.com/Abhishek-Gsoc",
    linkedin: "https://www.linkedin.com/in/abhishek-allurkar"
  }
];

// All featured projects.
const PROJECTS = [
  {
    name: "Interactive Quiz App",
    url: "https://interactive-quiz-app-indol.vercel.app/",
    description: "Interactive quiz platform with timer, score tracking, categories, and responsive UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    mockupType: "quiz",
    icon: "fas fa-question-circle"
  },
  {
    name: "Expense Tracker",
    url: "https://expense-tracker-qjdu.vercel.app/",
    description: "Track income and expenses with local storage and modern dashboard.",
    technologies: ["HTML", "CSS", "JavaScript"],
    mockupType: "tracker",
    icon: "fas fa-chart-line"
  },
  {
    name: "Live News Feed",
    url: "https://live-news-hdk4.vercel.app/",
    description: "Responsive news application using APIs to fetch real-time headlines.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    mockupType: "news",
    icon: "fas fa-newspaper"
  },
  {
    name: "GitHub Developer Explorer",
    url: "https://github-developer-explorer-psi.vercel.app/",
    description: "Search GitHub developers and explore repositories, followers, and profile details.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
    mockupType: "github",
    icon: "fab fa-github"
  },
  {
    name: "Kanban Task Board",
    url: "https://kanban-taskboard-1.vercel.app/",
    description: "Drag-and-drop task management board with multiple workflow stages.",
    technologies: ["HTML", "CSS", "JavaScript"],
    mockupType: "kanban",
    icon: "fas fa-tasks"
  }
];