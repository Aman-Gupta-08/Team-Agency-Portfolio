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

// ==========================================================================
// 2. DOM RENDERING FUNCTIONS (CREATING CARDS IN HTML)
// ==========================================================================

// Function to generate the HTML for a project mockup card preview
function createMockupHTML(type, icon) {
  return `
    <div class="project-mockup ${type}">
      <div class="mockup-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <div class="mockup-body">
        <i class="${icon}"></i>
      </div>
    </div>
  `;
}

// Render dynamic team member cards into the team grid
function renderTeamMembers() {
  const container = document.getElementById("team-grid");
  if (!container) return;

  let teamHTML = "";
  for (let i = 0; i < TEAM_MEMBERS.length; i++) {
    const member = TEAM_MEMBERS[i];
    
    // Create badges for skills
    let skillsHTML = "";
    for (let j = 0; j < member.skills.length; j++) {
      skillsHTML += `<span class="team-skill-badge">${member.skills[j]}</span>`;
    }

    teamHTML += `
      <article class="team-card reveal-zoom-in">
        <div class="team-card-header">
          <div class="team-image-wrapper">
            <img src="${member.image}" alt="${member.name}" class="team-image" loading="lazy">
          </div>
          <div class="team-meta">
            <h3>${member.name}</h3>
            <span class="role">${member.role}</span>
          </div>
        </div>
        <p class="team-bio">${member.bio}</p>
        <h4 class="team-skills-title">Skills</h4>
        <div class="team-skills-list">
          ${skillsHTML}
        </div>
        <div class="team-links">
          <a href="${member.github}" target="_blank" class="team-btn github" aria-label="${member.name} GitHub">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="${member.linkedin}" target="_blank" class="team-btn linkedin" aria-label="${member.name} LinkedIn">
            <i class="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </article>
    `;
  }
  
  container.innerHTML = teamHTML;
}

// Render dynamic project cards into the projects grid
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  let projectsHTML = "";
  for (let i = 0; i < PROJECTS.length; i++) {
    const proj = PROJECTS[i];
    
    // Create technology badges
    let techHTML = "";
    for (let j = 0; j < proj.technologies.length; j++) {
      techHTML += `<span class="project-tag">${proj.technologies[j]}</span>`;
    }

    projectsHTML += `
      <article class="project-card reveal-fade-up">
        <div class="project-visual">
          ${createMockupHTML(proj.mockupType, proj.icon)}
        </div>
        <div class="project-content">
          <h3 class="project-title">${proj.name}</h3>
          <p class="project-description">${proj.description}</p>
          <div class="project-tags">
            ${techHTML}
          </div>
          <a href="${proj.url}" target="_blank" class="project-link ripple">
            Live Demo <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i>
          </a>
        </div>
      </article>
    `;
  }

  container.innerHTML = projectsHTML;
}

// Render small quick contact cards for the sidebar in the contact section
function renderQuickContacts() {
  const container = document.getElementById("quick-contacts-grid");
  if (!container) return;

  let contactsHTML = "";
  for (let i = 0; i < TEAM_MEMBERS.length; i++) {
    const member = TEAM_MEMBERS[i];
    
    // Extract first name for display
    const firstName = member.name.split(" ")[0];

    contactsHTML += `
      <div class="quick-contact-card">
        <img src="${member.image}" alt="${member.name}" class="quick-contact-img" loading="lazy">
        <div class="quick-contact-name">${firstName}</div>
        <div class="quick-contact-links">
          <a href="${member.github}" target="_blank" aria-label="${member.name} GitHub"><i class="fab fa-github"></i></a>
          <a href="${member.linkedin}" target="_blank" aria-label="${member.name} LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    `;
  }

  container.innerHTML = contactsHTML;
}
