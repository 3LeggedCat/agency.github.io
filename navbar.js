// Get the navbar element
const navbar = document.getElementById("nav-items");
const container = document.getElementById("container");

// Function to handle scroll
function handleScroll() {
  // Check if page is scrolled more than 50 pixels
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
    container.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    container.classList.remove("scrolled");
  }
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Check initial scroll position on page load
handleScroll();
