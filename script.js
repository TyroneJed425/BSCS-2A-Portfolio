// Carousel content: edit these titles and descriptions to match your actual projects.
const slides = [
  {
    heading: "Character Illustration and Design",
    description: "A close-up character illustration featuring an original character cosplaying one of the popular characters from the game 'Metal Gear Rising: Revengeance'. This artwork showcases my skills in digital painting, character design, and attention to detail."
  },
  {
    heading: "Flash 2D Animation",
    description: "Animation made in Adobe Animate (formerly Flash) featuring a character design with a simple color palette and expressive movement. This animation demonstrates my skills in character animation and storytelling."
  },
  {
    heading: "Flash Symbols and Sprite Sheets",
    description: "A collection of reusable Flash symbols and sprite sheets created for efficient animation production. These assets demonstrate my ability to create organized and optimized visual elements for digital animation."
  }
];

let currentSlide = 1;
const track = document.getElementById("carousel-track");
const heading = document.getElementById("slide-heading");
const description = document.getElementById("slide-description");
const dots = [...document.querySelectorAll(".dot")];

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  // Keep all three artwork thumbnails visible in the vertical stack.
  // Selecting one highlights it and updates the matching description.
  document.querySelectorAll(".carousel .slide").forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
    slide.setAttribute("aria-pressed", String(i === currentSlide));
  });
  heading.textContent = slides[currentSlide].heading;
  description.textContent = slides[currentSlide].description;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
    dot.setAttribute("aria-current", i === currentSlide ? "true" : "false");
  });
}

document.getElementById("prev-slide").addEventListener("click", () => showSlide(currentSlide - 1));
document.getElementById("next-slide").addEventListener("click", () => showSlide(currentSlide + 1));
dots.forEach(dot => dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide))));
document.querySelectorAll(".carousel .slide").forEach(slide => {
  slide.addEventListener("click", () => showSlide(Number(slide.dataset.slide)));
  slide.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showSlide(Number(slide.dataset.slide));
    }
  });
});

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

// This uses mailto, so it opens the visitor's configured email application.
// Replace this address with the email address where you want to receive messages.
const contactEmail = "your-email@example.com"; // Replace with your real email address.
document.getElementById("message-form").addEventListener("submit", event => {
  event.preventDefault();
  const message = document.getElementById("message").value.trim();
  if (!message) return;
  const subject = encodeURIComponent("Portfolio inquiry");
  const body = encodeURIComponent(message);
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Set the initial selected artwork and matching caption on page load.
showSlide(currentSlide);
