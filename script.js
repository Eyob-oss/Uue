// Typewriter effect
const roles = ["Video Editor", "Digital Creator", "Web Developer", "Graphic Designer"];
let roleIndex = 0;
let charIndex = 0;
const typewriter = document.getElementById('typewriter');

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typewriter.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeRole, 150);
  } else {
    setTimeout(() => {
      backspace();
    }, 1000);
  }
}

function backspace() {
  if (charIndex > 0) {
    typewriter.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(backspace, 100);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

typeRole();

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Animations
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// Modal Functions
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}