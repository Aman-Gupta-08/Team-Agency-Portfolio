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

// ==========================================================================
// 3. INTERACTIVE LAYOUT FUNCTIONS (NAVIGATION, TOGGLES, ANIMATIONS)
// ==========================================================================

// Handle header background styling when scrolling
function handleHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Highlight the current section link in the navbar
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120; // Accounts for header height
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Mobile navigation hamburger toggle logic
function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

  // Toggle active class when menu button clicked
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Freeze body scrolling while menu is open
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking on any navbar page link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// Theme management (Dark Mode / Light Mode toggle with local storage)
function setupTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  // 1. Check for saved theme in local storage or use system color schemes default
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  // Apply theme setting
  document.documentElement.setAttribute("data-theme", currentTheme);

  // 2. Add event listener to handle clicks
  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = activeTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

// Typing title text animation inside Hero section
function setupTypingAnimation() {
  const typingSpan = document.getElementById("typing-text");
  if (!typingSpan) return;

  const wordsList = ["Together", "with Passion", "with Quality", "as a Team"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  const typeEffect = () => {
    const currentWord = wordsList[wordIndex];

    if (isDeleting) {
      // Erase characters
      typingSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      delay = 50; // Deletes faster
    } else {
      // Add characters
      typingSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      delay = 120; // Typing speed
    }

    // Determine states transitions
    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000; // Pause when word completed
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % wordsList.length; // Loop back or go to next word
      delay = 500; // Brief pause before typing next
    }

    setTimeout(typeEffect, delay);
  };

  typeEffect();
}

// Back to Top Button behavior
function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  // Toggle button visibility on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  // Scroll to top when clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================================================
// 4. ANIMATION SCRIPTS (REVEALS & STATS COUNTERS)
// ==========================================================================

// Scroll reveal animations (Intersections Observer)
function setupScrollReveal() {
  const elements = document.querySelectorAll(
    ".reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-zoom-in"
  );

  // Configuration options for the observer
  const observerSettings = {
    threshold: 0.15, // Elements trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Run animation once only
      }
    });
  }, observerSettings);

  elements.forEach((elem) => observer.observe(elem));
}

// Stats numeric counters animation
function setupStatsCounter() {
  const statsSection = document.querySelector(".stats");
  const counters = document.querySelectorAll(".stat-number");
  if (!statsSection || counters.length === 0) return;

  let animationStarted = false;

  const countUpNumbers = () => {
    counters.forEach((counter) => {
      const targetNum = parseInt(counter.getAttribute("data-target"), 10);
      const suffixString = counter.getAttribute("data-suffix") || "";
      
      let currentVal = 0;
      const totalSteps = 50; // Total steps for the counter transition
      const incrementVal = targetNum / totalSteps;

      const runCounter = setInterval(() => {
        currentVal += incrementVal;
        
        if (currentVal >= targetNum) {
          counter.textContent = targetNum + suffixString;
          clearInterval(runCounter);
        } else {
          counter.textContent = Math.floor(currentVal) + suffixString;
        }
      }, 25); // update numbers every 25ms
    });
  };

  // Trigger counters when stats section visible
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;
          countUpNumbers();
        }
      });
    },
    { threshold: 0.5 }
  );

  statsObserver.observe(statsSection);
}
