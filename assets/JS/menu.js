// menu.js

// ----- Menu burger -----
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("navMenu");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  burger.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
    }
  });
}

// ----- Effet reveal -----
const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
  window.addEventListener('scroll', () => {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });
}
