
// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu after clicking a navigation link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Lucide icons
lucide.createIcons();

// Scroll reveal animations
const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .experience-card, .timeline-item"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});
