// Toggle "Learn More" product description
function toggleInfo(button) {
  const info = button.nextElementSibling;
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    button.textContent = "Hide Info";
  } else {
    info.style.display = "none";
    button.textContent = "Learn More";
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
