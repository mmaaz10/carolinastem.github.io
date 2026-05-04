// Rotating text animation (only on home page)
const messages = [
  "Free STEM Tutoring for North Carolina Students",
  "Student-Led and Accessible STEM Education",
  "Supporting the Next Generation of Scientists"
];
let index = 0;
const textElement = document.getElementById("rotating-text");

if (textElement) {
  setInterval(() => {
    textElement.classList.add("fade-out");
    setTimeout(() => {
      index = (index + 1) % messages.length;
      textElement.textContent = messages[index];
      textElement.classList.remove("fade-out");
    }, 600);
  }, 4000);
}

// Fade in hero elements on page load
window.addEventListener('load', function() {
  // For home page (subtitle and buttons only)
  const subtitle = document.querySelector('.hero .subtitle');
  const buttonGroup = document.querySelector('.hero .button-group');
  
  // For other pages (title, subtitle, and buttons)
  const heroTitle = document.querySelector('.hero h1:not(#rotating-text)');
  
  if (heroTitle) {
    setTimeout(() => {
      heroTitle.classList.add('active');
    }, 100);
  }
  
  if (subtitle) {
    setTimeout(() => {
      subtitle.classList.add('active');
    }, 300);
  }
  
  if (buttonGroup) {
    setTimeout(() => {
      buttonGroup.classList.add('active');
    }, 500);
  }
});

// X Button for paused heading
function closeAnnouncement() {
  document.getElementById("announcement").style.display = "none";
}
