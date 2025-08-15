const phrases = ["Web Developer", "Front-End Enthusiast", "React Learner", "VLSI Explorer"];
const typingElement = document.getElementById("typing");
const cursor = document.querySelector(".cursor");

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const currentLetters = currentPhrase.substring(0, letterIndex);
  typingElement.textContent = currentLetters;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, typingSpeed / 2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}
type();

// Floating Profile Picture Toggle Animation
const profilePic = document.getElementById("profile-pic");

profilePic.style.transition = "transform 0.4s ease, filter 0.4s ease";
profilePic.addEventListener("click", () => {
  profilePic.classList.toggle("wave");

  // Optional animation class
  if (profilePic.classList.contains("wave")) {
    profilePic.style.transform = "rotate(10deg) scale(1.05)";
    profilePic.style.filter = "drop-shadow(0 0 10px #00d8ff)";
  } else {
    profilePic.style.transform = "rotate(0deg) scale(1)";
    profilePic.style.filter = "none";
  }
});

// Skills animate on scroll
const bars = document.querySelectorAll(".skill-bar");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.5 });
bars.forEach(bar => observer.observe(bar));


// AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove 'active' from all
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(card => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });

// Optional: Contact form dummy submit
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for contacting me! I'll get back to you soon.");
    contactForm.reset();
  });
}

// Remove welcome overlay
window.addEventListener("load", ()=>{setTimeout(()=>{
      document.getElementById("welcome-overlay").style.display = "none";
    }, 2000);
  });

