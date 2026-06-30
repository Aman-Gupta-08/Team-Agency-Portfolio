
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
